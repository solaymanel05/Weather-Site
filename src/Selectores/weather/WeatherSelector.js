export const weatherSelector = (state) => state.weather.main.feels_like;
export const humiditySelec = (state) => state.weather.main.humidity;

export const nameWeatherSelector = (state) => state.weather.name;

export const countrySelector = (state) => state.weather.sys.country;
export const sunriseSelector = (state) => state.weather.sys.sunrise;

export const windSelector = (state) => state.weather.wind.speed;
export const windDegSelector = (state) => state.weather.wind.deg;

export const iconWeatherSelector = (state) => state.weather.weather.icon;

export const IsLoadedSelector = (state) => state.weather.isLoaded;
/*============================================================================= */
 
/***********************     Day One       **********************/

export const dateSelectorOne = (state) => state.weather.dayOne.dt_txt
export const feelsSelctorOne = (state) => state.weather.dayOne.main.feels_like
export const humiditySelctorOne = (state) => state.weather.dayOne.main.humidity
export const windSpeedSelctorOne = (state) => state.weather.dayOne.wind.speed
export const windDegSelctorOne = (state) => state.weather.dayOne.wind.deg
export const iconSelctorOne = (state) => state.weather.dayOne.weather[0].icon

/***********************     Day Two    **********************/

export const dateSelectorTwo = (state) => state.weather.dayTwo.dt_txt
export const feelsSelctorTwo = (state) => state.weather.dayTwo.main.feels_like
export const humiditySelctorTwo = (state) => state.weather.dayTwo.main.humidity
export const windSpeedSelctorTwo = (state) => state.weather.dayTwo.wind.speed
export const windDegSelctorTwo = (state) => state.weather.dayTwo.wind.deg
export const iconSelctorTwo = (state) => state.weather.dayTwo.weather[0].icon


/***********************     Day Three    **********************/

export const dateSelectorThree = (state) => state.weather.dayThree.dt_txt
export const feelsSelctorThree = (state) => state.weather.dayThree.main.feels_like
export const humiditySelctorThree = (state) => state.weather.dayThree.main.humidity
export const windSpeedSelctorThree = (state) => state.weather.dayThree.wind.speed
export const windDegSelctorThree = (state) => state.weather.dayThree.wind.deg
export const iconSelctorThree = (state) => state.weather.dayThree.weather[0].icon

/***********************     Day Four    **********************/

export const dateSelectorFour = (state) => state.weather.dayFour.dt_txt
export const feelsSelctorFour = (state) => state.weather.dayFour.main.feels_like
export const humiditySelctorFour = (state) => state.weather.dayFour.main.humidity
export const windSpeedSelctorFour = (state) => state.weather.dayFour.wind.speed
export const windDegSelctorFour = (state) => state.weather.dayFour.wind.deg
export const iconSelctorFour = (state) => state.weather.dayFour.weather[0].icon

/***********************     Day Five    **********************/

export const dateSelectorFive = (state) => state.weather.dayFive.dt_txt
export const feelsSelctorFive = (state) => state.weather.dayFive.main.feels_like
export const humiditySelctorFive = (state) => state.weather.dayFive.main.humidity
export const windSpeedSelctorFive = (state) => state.weather.dayFive.wind.speed
export const windDegSelctorFive = (state) => state.weather.dayFive.wind.deg
export const iconSelctorFive = (state) => state.weather.dayFive.weather[0].icon