'use strict'

let DefaultSettings = {
	emptyFiles: [
        'MagicWand.gpk',
        'NPC_GatlingTower.gpk',
        'Awaken_Booster.gpk',
        'S1UI_AwesomeFrame.gpk',
        'S1UI_ExpBar.gpk',
        'S1UI_ComboCounter.gpk',
        'LoadingImages.gpk'
    ]
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
	if(from_ver === undefined) {
		return Object.assign(Object.assign({}, DefaultSettings), settings);
	} else if(from_ver === null) {
		return DefaultSettings;
	} else {
		
        if (from_ver + 1 < to_ver) {

            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }

        switch(to_ver)
        {
            case 2:
            	console.log('This is the first version of this settings file.')
        }
        
        return settings;

	}
}