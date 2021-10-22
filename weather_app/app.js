/**
 * Try a simple http request to obtain the weather forecast for a location 
 * 
 * !!!!!!!!!!
 * The api key is written inside a file config.json that must be created in the weather_app folder
 * 
 * Terminal commands:
 * > node app.js
 */
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('rome', (error, geoData) => {
	if (error) return console.log('Error', error)

	forecast(geoData.lat, geoData.lng, (error, forecastData) => {
		if(error) return console.log('Error', error)
		
		console.log(geoData.location)
		console.log(forecastData)
	})

})

