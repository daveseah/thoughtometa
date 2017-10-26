/*////////////////////////////// THOUGHTOMETA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

	Thoughtometa is a experimental code-driven knowledge authoring tool.

	Concept: create a module that allows us to define chunks of data that
	can be tagged.

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -~v~- ///////////////////////////////////*/

/** LIBRARIES ****************************************************************/

	// definer module manages chunks of data
	const DEF               = require('../modules/definer');
	const Metalsmith        = require("metalsmith");
	const markdown          = require("metalsmith-markdown");
	const collections       = require("metalsmith-collections");
	const permalinks        = require("metalsmith-permalinks");
	const drafts            = require("metalsmith-drafts");
	const define            = require("metalsmith-define");
	const metalsmithExpress = require("metalsmith-express");
	const watch             = require("metalsmith-watch");

	const THOUGHTS          = '../../thoughts';
	const THOUGHTS_HTML     = THOUGHTS + '_html';


	

/** RUNTIME ******************************************************************/

	console.log("SUPER DUPER THOUGHTOMETA 1.0");

	// test metalsmith
	Metalsmith(__dirname)
		.use( define({
			myvariable: 'hello world'
		}))
		.source( THOUGHTS )
		.use ( function ( files, metalsmith, done ) {
			let filenames = Object.keys(files);
			console.log(filenames);
			done();
		})
		.use(markdown({
			"smartypants" : true,
			"gfm"         : true,
			"tables"      : true
		}))
		.destination(THOUGHTS_HTML)
		.build(function(err) {
			if (err) console.log(err);
		}); // Metalsmith


///////////////////////////////////////////////////////////////////////////////
/** MODULE WAIT **************************************************************/
/// make node stick around so the browser debugger has a chance to startup 
//  use control-c to stop
	// (function wait () { setTimeout(wait, 1000); })();