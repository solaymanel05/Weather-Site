import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import {
  dateSelectorFive,
  dateSelectorFour,
  dateSelectorOne,
  dateSelectorThree,
  dateSelectorTwo,
  feelsSelctorFive,
  feelsSelctorFour,
  feelsSelctorOne,
  feelsSelctorThree,
  feelsSelctorTwo,
  humiditySelctorFive,
  humiditySelctorFour,
  humiditySelctorOne,
  humiditySelctorThree,
  humiditySelctorTwo,
  iconSelctorFive,
  iconSelctorFour,
  iconSelctorOne,
  iconSelctorThree,
  iconSelctorTwo,
  windDegSelctorFive,
  windDegSelctorFour,
  windDegSelctorOne,
  windDegSelctorThree,
  windDegSelctorTwo,
  windSpeedSelctorFive,
  windSpeedSelctorFour,
  windSpeedSelctorOne,
  windSpeedSelctorThree,
  windSpeedSelctorTwo,
} from "../../Selectores/weather/WeatherSelector";

export default function AthersDays() {
  const DateOneday = useSelector(dateSelectorOne);
  const OnefeelsOne = useSelector(feelsSelctorOne);
  const OnehumidityOne = useSelector(humiditySelctorOne);
  const windSpeedOne = useSelector(windSpeedSelctorOne);
  const windDegOne = useSelector(windDegSelctorOne);
  const weatherIconOne  = useSelector(iconSelctorOne)
  console.log("iconOne:" ,weatherIconOne)

  const DateTwoday = useSelector(dateSelectorTwo);
  const TwofeelsTwo = useSelector(feelsSelctorTwo);
  const TwohumidityTwo = useSelector(humiditySelctorTwo);
  const windSpeedTwo = useSelector(windSpeedSelctorTwo);
  const windDegTwo = useSelector(windDegSelctorTwo);
  const weatherIconTwo = useSelector(iconSelctorTwo)
  console.log("iconTwo:" ,weatherIconTwo)

  const DateThreeday = useSelector(dateSelectorThree);
  const TwofeelsThree = useSelector(feelsSelctorThree);
  const TwohumidityThree = useSelector(humiditySelctorThree);
  const windSpeedThree = useSelector(windSpeedSelctorThree);
  const windDegThree = useSelector(windDegSelctorThree);
  const weatherIconThree = useSelector(iconSelctorThree)
  console.log("iconThree:" ,weatherIconThree)

  const DateFourday = useSelector(dateSelectorFour);
  const TwofeelsFour = useSelector(feelsSelctorFour);
  const TwohumidityFour = useSelector(humiditySelctorFour);
  const windSpeedFour = useSelector(windSpeedSelctorFour);
  const windDegFour = useSelector(windDegSelctorFour);
  const weatherIconFour = useSelector(iconSelctorFour)
  console.log("iconFour:" ,weatherIconFour)

  const DateFiveday = useSelector(dateSelectorFive);
  const TwofeelsFive = useSelector(feelsSelctorFive);
  const TwohumidityFive = useSelector(humiditySelctorFive);
  const windSpeedFive = useSelector(windSpeedSelctorFive);
  const windDegFive = useSelector(windDegSelctorFive);
  const weatherIconFive = useSelector(iconSelctorFive)
  console.log("iconFive:" ,weatherIconFive)

  const weatherData = [
    {
      date: DateOneday,
      feels: OnefeelsOne,
      humidity: OnehumidityOne,
      deg: windDegOne,
      speed: windSpeedOne,
      icon: weatherIconOne,
    },
    {
      date: DateTwoday,
      feels: TwofeelsTwo,
      humidity: TwohumidityTwo,
      deg: windDegTwo,
      speed: windSpeedTwo,
      icon: weatherIconTwo,
    },
    {
      date: DateThreeday,
      feels: TwofeelsThree,
      humidity: TwohumidityThree,
      deg: windDegThree,
      speed: windSpeedThree,
      icon: weatherIconThree,
    },
    {
      date: DateFourday,
      feels: TwofeelsFour,
      humidity: TwohumidityFour,
      deg: windDegFour,
      speed: windSpeedFour,
      icon: weatherIconFour,
    },
    {
      date: DateFiveday,
      feels: TwofeelsFive,
      humidity: TwohumidityFive,
      deg: windDegFive,
      speed: windSpeedFive,
      icon: weatherIconFive,
    }
  ];
  
  return (
    <div className="container-of-Ather-days mt-4 ">
      <div className="table-responsive">
      <table className="table table-striped table-dark" >
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp</th>
            <th>Humidity</th>
            <th>Wind Degree</th>
            <th>Wind Speed</th>
            <th>Weather </th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((day, index) => (
            <tr key={index}>
              <td>{day.date}</td>
              <td>{day.feels} ° C</td>
              <td>{day.humidity}</td>
              <td>{day.deg}</td>
              <td>{day.speed}</td>
              <td>
                <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="weather icon" style={{width:"40px"}} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
