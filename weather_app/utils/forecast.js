const fs = require('fs')
const request = require('request')

const config = JSON.parse(fs.readFileSync('config.json'))
const { weather_apikey, units = 'm' } = config

const forecast = ({lat, lng}, callback) => {
	const weatherstackUrl = "http://api.weatherstack.com/current?access_key=" + weather_apikey + "&query=" + lat + "," + lng + "&units=" + units

	request({ url: weatherstackUrl, json: true }, (error, response) => {
		const {body:responseBody} = response
		if (error) {
			callback('An error occurred while fetching the weather info!', undefined)
		} else if (responseBody.error) {
			callback(responseBody.error.info, undefined)
		} else {
			const { weather_descriptions, temperature, humidity } = responseBody.current
			callback(undefined, weather_descriptions[0] + ". It's currently " + temperature + " degrees out. Humidity is at " + humidity + "%.")
		}
	})
}

module.exports = forecast