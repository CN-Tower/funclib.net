const fn = require('funclib');
const path = require('path');

const lib = path.resolve('./src/assets/lib');
const fnLib = path.join(lib, 'funclib');
const newFn = path.resolve('node_modules/funclib');

fn.progress('Updating Lib', { width: 46 });
fn.rm(fnLib);
fn.cp(newFn, lib);
fn.progress.stop(() => {
  fn.log('更新funclib.js成功!');
});
