/**
 * # Get user input from the cli
 * 
 * process is an object available to node that include lot of properties relative to the node process 
 * using process.argv (argument vector) we obtain an array with some informations about the command in the cli
 * the first 2 positions are relative to [0] = path to node.exe [1] = path to current script [2] = first parameter given in the cli
 * 
 * Terminal command
 * > node app.js parameter_1 parameter_2
 * 
 */

let infos = process.argv

let node_path = infos[0]
let script_path = infos[1]

infos.splice(0, 2) //arguments written in the script are from position >= 2 so we can remove the first 2 parameters
let arguments = infos 

console.log({ 'node_path': node_path, 'script_path': script_path, 'arguments': arguments})