// src/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    clouds: undefined,
    main: {
      feels_like: undefined,
      humidity: undefined,
    },
    name: undefined,
    sys: {
      country: undefined,
      sunrise: undefined,
    },
    weather: {
      icon: undefined,
    },
    wind: {
      speed: undefined,
      deg: undefined,
    },

    dayOne: {
      main: {
        feels_like: undefined,
        humidity: undefined,
      },
      wind: {
        speed: undefined,
        deg: undefined,
      },
      weather: [
        {
          icon: undefined,
        },
      ],

      dt_txt: undefined,
    },
    dayTwo: {
      main: {
        feels_like: undefined,
        humidity: undefined,
      },
      wind: {
        speed: undefined,
        deg: undefined,
      },
      weather: [
        {
          icon: undefined,
        },
      ],

      dt_txt: undefined,
    },
    dayThree: {
      main: {
        feels_like: undefined,
        humidity: undefined,
      },
      wind: {
        speed: undefined,
        deg: undefined,
      },
      weather: [
        {
          icon: undefined,
        },
      ],

      dt_txt: undefined,
    },
    dayFour: {
      main: {
        feels_like: undefined,
        humidity: undefined,
      },
      wind: {
        speed: undefined,
        deg: undefined,
      },
      weather: [
        {
          icon: undefined,
        },
      ],

      dt_txt: undefined,
    },
    dayFive: {
      main: {
        feels_like: undefined,
        humidity: undefined,
      },
      wind: {
        speed: undefined,
        deg: undefined,
      },
      weather: [
        {
          icon: undefined,
        },
      ],

      dt_txt: undefined,
    },

    isLoaded: false,
  },
  reducers: {
    setData(state, action) {
      const { clouds, main, name, sys, weather, wind } = action.payload;
      state.clouds = clouds;
      state.main = main;
      state.name = name;
      state.sys = sys;
      state.weather = weather[0];
      state.wind = wind;
      state.isLoaded = true;
    },
    resetData(state, action) {
      state.isLoaded = false;
    },
    athersDays(state, action) {
      const { list } = action.payload;
      console.log(list);
      state.dayOne = list[0];
      state.dayTwo = list[11];
      state.dayThree = list[16];
      state.dayFour = list[24];
      state.dayFive = list[30];
      state.isLoaded = true;
    },
  },
});

export const { setData, resetData, athersDays } = WeatherSlice.actions;
export default WeatherSlice.reducer;
