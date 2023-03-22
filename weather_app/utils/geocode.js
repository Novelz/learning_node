const fs = require('fs')
const request = require('request')

const config = JSON.parse(fs.readFileSync('config.json'))
const {map_apikey} = config


const geocode = (address, callback) => {
	const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + map_apikey + "&limit=1"

	request({ url: mapboxUrl, json: true }, (error, response) => {
		const {body:responseBody} = response
		if (error) {
			callback('An error occurred while fetching location info!', undefined)
		} else if (responseBody.message) {
			callback(responseBody.message, undefined)
		} else if (responseBody.features.length == 0) {
			callback('Unable to find location. Try another search.', undefined)	
		} else {
			const {center, place_name} = responseBody.features[0] //keep only the first result
			callback(undefined, { lat: center[1], lng: center[0], location: place_name })
		}
	})
}


module.exports = geocode