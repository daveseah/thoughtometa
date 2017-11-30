/*////////////////////////////// THOUGHTOMETA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

	Thoughtometa is a experimental code-driven knowledge authoring tool.

	Concept: create a module that allows us to define chunks of data that
	can be tagged.

	METASMITH PLUGIN MODULES IN USE

	"markdown"    - takes source file object and expands markdown into HTML
	"collections" - creates collection objects that can be iterated over
	"permalinks"  - renames/sets the 'path' metadata based on properties (e.g. title)
	"drafts"      - skips files that have frontmatter 'draft: true'
	"define"      - allows you to set variables in the chain
	"templates"   -
	"express"     -
	"watch"       -

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -~v~- ///////////////////////////////////*/

/** LIBRARIES ****************************************************************/

	// definer module manages chunks of data
	const DEF               = require('../modules/definer');
	const Metalsmith        = require("metalsmith");
	const markdown          = require("metalsmith-markdown");
	const collections       = require("metalsmith-collections");
	const templates         = require("metalsmith-templates");
	const permalinks        = require("metalsmith-permalinks");
	const drafts            = require("metalsmith-drafts");
//	const define            = require("metalsmith-define");
	const metalsmithExpress = require("metalsmith-express");
	const watch             = require("metalsmith-watch");

	const THOUGHTS          = '../../thoughts';
	const THOUGHTS_HTML     = THOUGHTS + '_html';

/** METALSMITH 'define' PLUGIN ***********************************************\

	SYNTAX: .use( define({keys}) )

	This is the define function in metalsmith-define, broken out here
	so I can understand how a plugin works in Metalsmith.

	(1) 
	The .use() chain expects a function that has accepts:
		files,metalsmith,callback

	return callback() called when the plugin finishes executing.

	(2) 
	Here it uses the Array.reduce( reducerFunc, initValue ) feature.
	The reducerFunc accepts the following parameters:
		accumulator, currentValue, currentIndex, array

	The reducerFunc is called for each item in the array it is reducing,
	and returns the 'accumulator' which is passed to the next iteration.
	It doesn't have to be a number either. In this case, the reducerFunc
	is getting the metadata from the metalsmith object

	(3)
	To initialize the plugin code itself, it's invoked with the OPTIONS that
	are to be added (and are iterated over as in (2) above) and it returns
	the value.

\*****************************************************************************/
const define = function plugin (options) {

	// reducer function is called multiple times with 'metadata'
	// being the persistent accumulator, and 'key' being the value being
	// parsed
	let reducerFunc = function (metadata, key) {
		metadata[key] = options[key];
		return metadata;
	};

	// return the actual plugin code, initialized with the 'options'
	// passed-in
	return function (files, metalsmith, done) {
		let startingMetadata = metalsmith.metadata(); 
		options = options || {};
		let optionKeys = Object.keys(options);
		optionKeys.reduce( reducerFunc, startingMetadata );
		return done(); 
	}
}


/** RUNTIME ******************************************************************/

	console.log("SUPER DUPER THOUGHTOMETA 1.0");

	/*/

		Metalsmith is a file processor that uses virtual files, which you can
		then manipulate as objects in a chained series of batch operations. 

		There are two key objects that are passed through the chain:
		'files' is a dictionary of file data, keyed by filename
		'metalsmith' is the metalsmith object itself

		The Metalsmith Pipeline starts by telling Metalsmith where to start
		looking for source files in a chain of file manipulation operations.

		The .source() operator tells Metalsmith to filter what files to process 
		further down the chain one-by-one. The .destination() operator tells
		Metalsmith where to write the processed files.

		The .use() operators are for plugins (see 'define' above for an example)
		which can further modify the operations.

		The .build() operator invokes the entire chain once it's been defined.

	/*/

	// create a chain of operations
	let chain = Metalsmith(__dirname)
		.use( define({
			myvariable: 'hello world'
		}))
		.source( THOUGHTS )
		.use ( function ( files, metalsmith, callback ) {
			// example use of plugin

			// read the contents of each file
			let filenames = Object.keys( files );
			filenames.forEach( function( file ) {
				let data = files[file];
			});
			console.log(metalsmith);
			// done processing, so trigger callback()
			callback();
		})
		.use( markdown( {
			"smartypants" : true,
			"gfm"         : true,
			"tables"      : true
		}))
		.destination( THOUGHTS_HTML );

	// this invokes the metalsmith chain defined above
	chain.build( function( err ) {
		if (err) console.log(err);
	}); // Metalsmith


///////////////////////////////////////////////////////////////////////////////
/** MODULE WAIT **************************************************************/
/// RUN the debugger by going to chrome://inspect
/// PREVENT program from ending so debugger can inspect values interactively
/// and output to browser console
	(function wait () { setTimeout(wait, 1000); })();