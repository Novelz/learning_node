/**
 * Callback functions
 * 
 * In a lot of case we call a function after something else has happened
 * these functions are called callback functions
 * 
 * Callback functions are useful when we need to manipulate the data returned by another function
 * for example we wait for an http request and then we store the result in a database with another function
 * 
 * The following example cover some of the use case for callback functions
 * 
 * Terminal commands 
 * > node app.js
 */


//Async simple callback
setTimeout(() => {
	console.log('2 seconds timer is up!')
}, 2000);

//Sync callback
const geocode = (location, callback) => {
	let data = {
		latitude: 0,
		longitude: 0
	}

	callback(data)
}
geocode('Rome', (data) => {
	console.log(data)
})

//Async cmplex callback
const add = (x, y, callback) => {
	setTimeout(() => { callback(x + y) }, 3000);
}

add(1, 4, (sum) => {
	console.log(sum)
})