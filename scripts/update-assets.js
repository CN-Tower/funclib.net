const fn = require('funclib');
const path = require('path');
const assets = path.resolve('assets');
const newAssets = path.resolve('node_modules/funclib');

fn.progress.start('Updating Assets');
fn.rm(assets);
fn.cp(newAssets, assets);
fn.progress.stop(() => {
    fn.log('Update Assets Success!');
});
