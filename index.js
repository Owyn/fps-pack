//Tera-Toolbox integration by HakuryuuDom
const fs = require('fs');
const path = require('path');
module.exports = function FPSPack(mod) {
    const videoFolder = path.join(mod.clientInterface.info.path, '../S1Game/CookedPC/Art_Data/Packages/Video');
    let files = fs.readdirSync(path.join(__dirname, 'res'), {withFileTypes: true});
    files.forEach(file => {
        mod.installGPK(path.join('res', file.name));
    });
    mod.settings.emptyFiles.forEach(file => {
        mod.installGPK(path.join('empty', 'empty.gpk'), file);
    });

    
}