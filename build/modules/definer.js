/*//////////////////////////////// DEFINER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

	DEFINER creates semantic chunks of data. These chunks can be sequenced,
	remixed, tagged, sorted, filtered and cross-referenced.

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -~v~- ///////////////////////////////////*/

/** LIBRARIES ****************************************************************/

const ModuleMgr   = require('./modulemgr');

/** DECLARATIONS *************************************************************/

var DEF = ModuleMgr.New('DEFINER');

DEF.Section = (id, content) => {
	if (typeof id!=='string') 
		throw new Error('arg1 must be unique string id');
	console.log(DEF.IdPrompt('id:',id,'content:',content));
};

/** MODULE EXPORT ************************************************************/
	module.exports = DEF;