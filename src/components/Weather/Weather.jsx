import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Moment from "react-moment"; ///
// import styles from "./Weather.Module.scss"
import "./Weather.Module.scss";
import LocationSvg from "../../SVG/LocationSvg";
import DefaultWeatherSvg from "../../SVG/DefaultWeatherSvg";
import TimingSvg from "../../SVG/TimingSvg";
import Termometre from "../../SVG/Termometre";
import WindySvg from "../../SVG/windySvg";
import { useSelector } from "react-redux";
import {
  IsLoadedSelector,
  countrySelector,
  humiditySelec,
  iconWeatherSelector,

  nameWeatherSelector,
  sunriseSelector,
  weatherSelector,
  windDegSelector,
  windSelector,
} from "../../Selectores/weather/WeatherSelector";
import SpeedometreSvg from "../../SVG/speedometreSvg";
import HumiditySvg from "../../SVG/humiditySvg";
import AthersDays from "../AtherDays/AthersDays";
export default function Weather() {
  const stateWeather = useSelector(weatherSelector);
  const weatherName = useSelector(nameWeatherSelector);
  const countryOfweather = useSelector(countrySelector);
  const windWeatherSelector = useSelector(windSelector);
  const sunRiseWeatherSelector = useSelector(sunriseSelector);
  const humidityWeatherSelec = useSelector(humiditySelec);
  const windDegSelect = useSelector(windDegSelector);
  const IconWeather = useSelector(iconWeatherSelector);
  const isLoaded = useSelector(IsLoadedSelector);





  // console.log("new weather", stateWeather);
  // const displayIcon = () => {

  //   return IconWeather
  //   // const number = IconWeather.substring(0,2)
  //   // switch(number){
  //   //  case '01': return <CloudySvg/>
  //   //  case '02': return <DefaultWeatherSvg/>
  //   //  case '03': return <DefaultWeatherSvg/>
  //   //  case '04': return <DefaultWeatherSvg/>
  //   //  case '09': return <DefaultWeatherSvg/>
  //   //  case '10': return <CloudySvg/>
  //   //  case '11': return <CloudySvg/>
  //   //  case '13': return <CloudySvg/>
  //   //  case '50': return <CloudySvg/>
  //   //  default:
  //   //   return  <img src={`https://openweathermap.org/img/wn/${IconWeather}@2x.png`}alt="" />

  //   // }

  // }
  return (
    <>
      <Card className="containerOfCard">
        {isLoaded ? (
          <>
          <Card.Body>
            <Card.Title className="title">
              {weatherName}, {countryOfweather} <LocationSvg />
              <div className="time">
                <div className="text-time">
                  {" "}
                  <Moment format="llll"></Moment>
                </div>
                <div>
                  <TimingSvg />
                </div>
              </div>
            </Card.Title>
            <Card.Text className="text">
              <div className="default">
                <motion.img
                  stroke={"gray"}
                  strokeWidth={20}
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    scale: 1.5,
                  
                  }}
                  transition={{
                    duration: 1,
                  
                  }}
                  src={`https://openweathermap.org/img/wn/${IconWeather}@2x.png`}
                  alt=""
                />
                {/* <DefaultWeatherSvg /> */}
              </div>
              <div className="temp">
                <span>
                  {stateWeather}° C{" "}
                  <span>
                    <Termometre />
                  </span>
                </span>
              </div>
              <div className="text-light">Good morning {weatherName}</div>
              <div className="line"></div>
              <div className="infos">
                <div className="border-right">
                  <div>
                    <DefaultWeatherSvg width="35px" height="25px" />
                  </div>
                  <div>Sunrise</div>
                  <Moment unix={true} format="hh:mm a">
                    {sunRiseWeatherSelector}
                  </Moment>
                </div>

                <div className="border-right">
                  <div>
                    <WindySvg width="35px" height="25px" />
                  </div>
                  <div>Wind</div>
                  <div>{windWeatherSelector}</div>
                </div>

                <div className="border-right">
                  <div>
                    <SpeedometreSvg />
                  </div>
                  <div>Speedometre</div>
                  <div>{windDegSelect}</div>
                </div>

                <div className="border-right">
                  <div>
                    <HumiditySvg />
                  </div>
                  <div>humidity</div>
                  <div>{humidityWeatherSelec}</div>
                </div>

                <div>
                  <div>
                    <Termometre width="35px" height="25px" color="#fff" />
                  </div>
                  <div>Temp</div>
                  <div>{stateWeather}° C</div>
                </div>
              </div>
            </Card.Text>
          
          </Card.Body>
            <AthersDays/>
          </>
        )
         : (
          <Card.Body>
            <Card.Title className="title">Please Choose your City</Card.Title>
          </Card.Body>
        )}
      </Card>
    
    </>
  );
}
