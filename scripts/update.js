const fn = require('funclib');
const path = require('path');
const exec = require('child_process').exec;

const lib = path.resolve('./src/lib');
const fnLib = path.join(lib, 'funclib');
const newFn = path.resolve('node_modules/funclib');

fn.progress('Updating Lib', { width: 46 });
exec('npm install funclib --save --upgrade', (err, stdout, stderr) => {
  if (err) throw err;
  fn.rm(fnLib);
  fn.cp(newFn, lib);
  fn.progress.stop(() => {
    fn.log('更新funclib.js成功!');
  });  
});
