/**
 * # Node.js Asynchronous execution
 * 
 * In the following script the order of execution is 
 * 1. Starting
 * 2. Stopping
 * 3. 0 seconds Timer
 * 4. 2 seconds Timer
 * 
 * The reason why the "0 seconds Timer" is executed after the "Stopping" script
 * can be found in the V8 engine internal execution order.
 * In Node the operation are listd in a call stack and executed in order, async function get pushed to Node API 
 * and once ready their callback is stacked into the callback queue.
 * The functions in callback queue are executed once the call stack is empty, so when the script has completed
 * all syncronous functions.
 * Thus the order of execution.
 * 
 * In detail
 * 
 * 1 - Main thread pushed to call stack (the execution of app.js in general)
 * 2 - Starting (added to call stack and removed once the message has been printed -- instant)
 * 3 - 2 seconds timeout added to call stack and moved to Node api as async function
 * 4 - 0 seconds timeout added to callback, moved to Node api as async function, timeout immediatly over and callback function transferred to callback queue, the callback is not called because call stack still have the main thread in list
 * 5 - Stopping (added to call stack and removed once the message has been printed -- instant)
 * 6 - Main thread over since no more sync functions are availble so it's removed from call stack
 * 7 - With call stack empty the Event loop push the result of 0 seconds timeout to call stack -> console.log("0 seconds Timer")
 * 8 - 0 seconds timeout removed from call stack
 * 9 - 2 seconds timeout over and callback function moved to callback queue
 * 10 - The call stack is empty and the Event loop move the 2 seconds timeout callback to call stack --> console.log("2 seconds Timer")
 * 11 - 2 seconds timeout removed from call stack
 * 
 * Terminal command:
 * > node app.js
 */
console.log('Starting')

setTimeout(() => {
	console.log('2 seconds Timer')
}, 2000)

setTimeout(() => {
	console.log('0 seconds Timer')
}, 0)

console.log('Stopping')