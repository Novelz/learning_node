const getNotes = () => {
	return "Your notes..."
}

/** Export the function getNotes of this module */
module.exports = getNotes

/** In case of multiple functions we can export them with the follow syntax 
*	module.exports = {
*		getNotes: getNotes,
*		dummyFunction: dummyFunction
*	}
*/