/*////////////////////////////// THOUGHTOMETA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

	Thoughtometa is a experimental code-driven knowledge authoring tool.

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -~v~- ///////////////////////////////////*/

/** LIBRARIES ****************************************************************/

	const DEF = require('../modules/definer');

/** RUNTIME ******************************************************************/

	console.log("SUPER DUPER THOUGHTOMETA 1.0");

	DEF.Section('header',"This is my header");

	// start making up syntax for defining a semantic chunk
	// DEF.Section('bananas');
	// DEF.AddContent('Bananas are yellow');

	// create HTML?
	// DEF.SortBy('property');
	// DEF.HTMLOut();

	// make node stick around so the browser debugger has a chance to startup 
	// use control-c to stop
	(function wait () { setTimeout(wait, 1000); })();