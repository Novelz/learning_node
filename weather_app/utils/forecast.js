const fs = require('fs')
const request = require('request')

const config = JSON.parse(fs.readFileSync('config.json'))
const weather_apikey = config.weather_apikey

const forecast = (lat, lng, callback) => {
	const weatherstackUrl = "http://api.weatherstack.com/current?access_key=" + weather_apikey + "&query=" + lat + "," + lng + "&units=" + config.units

	request({ url: weatherstackUrl, json: true }, (error, response) => {
		if (error) {
			callback('An error occurred while fetching the weather info!', undefined)
		} else if (response.body.error) {
			callback(response.body.error.info, undefined)
		} else {
			const currentWeather = response.body.current
			callback(undefined, currentWeather.weather_descriptions[0] + ". It's currently " + currentWeather.temperature + " degrees out. Humidity is at " + currentWeather.humidity + "%.")
		}
	})
}

module.exports = forecast