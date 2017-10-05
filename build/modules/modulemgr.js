/*///////////////////////////// MODULE MANAGER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

	A centralized module manager with some error utilities thrown in to create
	my dave-style modules

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -~v~- ///////////////////////////////////*/

	const DBG = true;

/// MODULE CLASS //////////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/*/ The Module class knows how to react to our own lifecycle events
/*/ class Module {
	/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	/*/ CONSTRUCTOR ///////////////////////////////////////////////////////////
	/*/ constructor (id) {
			if (typeof id!=='string') throw new Error('id must be string');	
			this.id = id;
		}
	/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	/*/ Return the id string of this module
	/*/ Id () {
			return this.id;
		}
	/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	/*/ Utility that returns a string prompt with module name + args
	/*/ IdPrompt( /*args*/ ) {
			let args = Array.from(arguments);
			let mos = 'Module.IdPrompt: '

			let prompt = '';
			let msg = '';

			prompt = '['+this.id+']: ' || '<UNKNOWN MODULE> ';
			for (let i=0;i<args.length;i++) {
				let chunk = args[i];
				msg += chunk;
				if (i!==(args.length-1)) msg += ' ';
			}	
			return prompt + msg;
		}
	} /* Module Class */


/// MODULE MANAGER CLASS //////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/*/ The ModuleManager maintains a list of modules that are retrievable by id,
	and have their own lifecycle
/*/ class ModuleMgr {
	/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	/*/ CONSTRUCTOR ///////////////////////////////////////////////////////////
	/*/ constructor () {
			this.modules = {};
		}
	/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	/*/ Return a new module instance, or crash if it already exists
	/*/ New( id ) {
			if (typeof id!=='string') throw new Error('id must be string');	
			id = id.trim();
			// does MOD EXIST?
			let mod = this.modules[id];
			if (mod) throw new Error('module ['+id+'] already exists!');
			// MOD doesn't exist, so create one
			mod = this.modules[id] = new Module(id);
			if (DBG) console.log('created new module',mod.id);
			return mod;
		}	
	} /* Module Manager Class */


/** MODULE EXPORT ************************************************************/
	module.exports = new ModuleMgr();
