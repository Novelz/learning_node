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

const apikey = config.apikey
const place_lat = '45.4299'
const place_lng = '10.98444'

const weatherStackUrl = "http://api.weatherstack.com/current?access_key="+apikey+"&query="+place_lat+","+place_lng

request({url: weatherStackUrl}, (error, response) => {
	const data = JSON.parse(response.body)
	console.log(data.current)
})
