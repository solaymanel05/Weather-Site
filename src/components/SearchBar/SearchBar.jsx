import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./SearchBar.module.scss";
import styles from "./SearchBar.module.scss";
import { useDispatch } from "react-redux";
import {
  athersDays,
  resetData,
  setData,
} from "../../Features/weather/weatherSlice";
import { useEffect } from "react";
import LocationSvg from "../../SVG/LocationSvg";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [cities, setCities] = useState([]);
  const [unity, setUnity] = useState("metric");
  const [geoLocation, setGeolocation] = useState(undefined);
  const [isCurrentLocation, setIsCurrentLocation] = useState(false);
  // const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY
  const getGeoLocation = () => {
    setIsCurrentLocation(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocation({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      }
    );
  };
  useEffect(() => {
    getGeoLocation();
  }, []);
  useEffect(() => {
    getData();
  }, [geoLocation]);

  const handelInputChange = (e) => {
    const { value } = e.currentTarget;
    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=f9b23d72e6fe4efea6ecf85c22cb267d`
    )
      .then((response) => response.json())
      .then((json) =>
        setCities(
          json.results.map((data) => {
            const { lat, lon, city, country, formatted } = data;
            return { label: city, value: city, lat, lon, country, formatted };
          })
        )
      )
      .catch((error) => console.log("error", error));
  };
  const getData = () => {
    if (geoLocation) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&units=${unity}&lon=${geoLocation.lon}&appid=cbb7da2463b169417c4bd6896d2373d9`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("all data for chosing:", json);
          const { clouds, main, name, sys, weather, wind } = json;
          console.log("all data weather", json);
          dispatch(setData({ clouds, main, name, sys, weather, wind }));
        })
        .catch((error) => console.log("error", error));

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocation.lat}&units=${unity}&lon=${geoLocation.lon}&appid=cbb7da2463b169417c4bd6896d2373d9`
      )
        .then((response) => response.json())
        .then((json) => {
          const { list } = json;
          dispatch(athersDays({ list }));
        })
        .catch((error) => console.log("error", error));
    }
  };
  const handelSelectChange = (e, value) => {
  
    if (value != null) {
      const { lon, lat } = value;
      setIsCurrentLocation(false)
      setGeolocation({
        lon,
        lat,
      });
    } else {
      dispatch(resetData());
    }

    if (value != null) {
      const { lon, lat } = value;
      setIsCurrentLocation(false)
      setGeolocation({
        lon,
        lat,
      });
    } else {
      dispatch(resetData());
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className={`d-flex  ${styles.searchContainer}`}>
          <Box sx={{ width: "100%" }}>
            {" "}
            <Autocomplete
              onChange={handelSelectChange}
              options={cities}
              className="inputUp"
              clearOnBlur={false}
              getOptionLabel={(option) => option.formatted}
              renderInput={(params) => (
                <TextField
                  onChange={handelInputChange}
                  {...params}
                  label={"Entre your city"}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        backgroundColor: "white",

                        background: "rgba(255, 255, 255, 0.200)",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                      color: "white",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                  }}
                />
              )}
              // options={["tetouan", "casablanca", "rabat"]}
            />
          </Box>
          {/* <Form.Control className='input'  size={"md"} type='text' placeholder='Enter your city ...'></Form.Control> */}
          <Button
          disabled={geoLocation === undefined || isCurrentLocation === true}
            size={"sm"}
            className="btn btn-light "
            variant="primary"
            onClick={() => getGeoLocation()}
          >
          <LocationSvg />
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
