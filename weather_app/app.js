/**
 * Try a simple http request to obtain the weather forecast for a location 
 * 
 * !!!!!!!!!!
 * The api key is written inside a file config.json that must be created in the weather_app folder
 * 
 * Terminal commands:
 * > node app.js
 */
const fs = require('fs')
const request = require('request')

const config = JSON.parse(fs.readFileSync('config.json'))

const weather_apikey = config.weather_apikey
const map_apikey = config.map_apikey
const place_lat = '45.4299'
const place_lng = '10.98444'

const geocode = (address, callback) => {
	const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodedURIComponent(address) +".json?access_token=" + map_apikey + "&limit=1"

	request({ url: mapboxUrl, json: true }, (error, response) => {
		//OS errors
		if (error) {
			console.error('An error occurred while fetching location info!')
			return false
		}

		if (response.body.message) {
			console.log(response.body.message)
			return false
		}

		if (response.body.features.length == 0) {
			console.log('Unable to find location. Try another search.')
			return false
		}

		const locationInfo = response.body.features[0] //keep only the first result
		callback({lat: locationInfo.center[1], lng: locationInfo.center[0]})
	})
}

const weatherForecast = (latlngInfo) => {
	const weatherstackUrl = "http://api.weatherstack.com/current?access_key=" + weather_apikey + "&query=" + latlngInfo.lat + "," + latlngInfo.lng + "&units=" + config.units
	
	request({ url: weatherstackUrl, json: true }, (error, response) => {
		if (error) {
			console.log('An error occurred while fetching the weather info!')
			return false
		}

		if (response.body.error) {
			console.log(response.body.error.info)
			return false
		}

		const currentWeather = response.body.current
		console.log(currentWeather.weather_descriptions[0] + ". It's currently " + currentWeather.temperature + " degrees out. Humidity is at " + currentWeather.humidity + "%.")
	})
}

geocode('verona', (latlng) => { weatherForecast(latlng) })