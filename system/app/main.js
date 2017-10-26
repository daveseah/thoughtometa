/*////////////////////////////// THOUGHTOMETA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

	Thoughtometa is a experimental code-driven knowledge authoring tool.

	Concept: create a module that allows us to define chunks of data that
	can be tagged.

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -~v~- ///////////////////////////////////*/

/** LIBRARIES ****************************************************************/

	// definer module manages chunks of data
	const DEF = require('../modules/definer');

/** RUNTIME ******************************************************************/

	console.log("SUPER DUPER THOUGHTOMETA 1.0");


///////////////////////////////////////////////////////////////////////////////
/** MODULE WAIT **************************************************************/
/// make node stick around so the browser debugger has a chance to startup 
//  use control-c to stop
	(function wait () { setTimeout(wait, 1000); })();