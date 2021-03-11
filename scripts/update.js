const fn = require('funclib');
const path = require('path');
const exec = require('child_process').exec;

const lib = path.resolve('./src/lib');
const fnLib = path.join(lib, 'funclib');
const newFn = path.resolve('node_modules/funclib');

fn.progress('Install latest funclib', { type: 'spi' });
exec('npm uninstall funclib --save', err => {
  if (err) throw err;
  exec('npm install funclib --save', err_ => {
    if (err_) throw err_;
    fn.progress.clear();
    fn.progress('Updating Lib', { width: 46 });
    fn.rm(fnLib);
    fn.cp(newFn, lib);
    fn.progress.stop(() => {
      fn.log('更新funclib.js成功!');
    }); 
  });
});
