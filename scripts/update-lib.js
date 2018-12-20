const fn = require('funclib');
const path = require('path');
const lib = path.resolve('./assets/lib');
const newLib = path.resolve('node_modules/funclib');

fn.progress.start('Updating Lib', {width: 46});
fn.rm(lib);
fn.cp(newLib, lib);
fn.progress.stop(() => {
    fn.log('Update Lib Success!');
});
