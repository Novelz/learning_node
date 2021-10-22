const fs = require('fs')
const request = require('request')

const config = JSON.parse(fs.readFileSync('config.json'))
const map_apikey = config.map_apikey


const geocode = (address, callback) => {
	const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + map_apikey + "&limit=1"

	request({ url: mapboxUrl, json: true }, (error, response) => {
		//OS errors
		if (error) {
			callback('An error occurred while fetching location info!', undefined)
		} else if (response.body.message) {
			callback(response.body.message, undefined)
		} else if (response.body.features.length == 0) {
			callback('Unable to find location. Try another search.', undefined)	
		} else {
			const locationInfo = response.body.features[0] //keep only the first result
			callback(undefined, { lat: locationInfo.center[1], lng: locationInfo.center[0], location: locationInfo.place_name })
		}
	})
}


module.exports = geocode