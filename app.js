const shell = require('shelljs');
const yargs = require('yargs');
 
const argv = yargs.argv;
const argv0 = argv._[0];

// ecej的git
const registryToEcej = ()=>{
    shell.exec('git config --global user.name james', { async: false });
    shell.exec('git config --global user.email 1501684012@qq.com', { async: false });
    shell.exec('git config -l', { async: false });
};

// 自己的git
const registryToself = ()=>{
    shell.exec('git config --global user.name yangxinquan0902', { async: false });
    shell.exec('git config --global user.email yangxinquan0902@163.com', { async: false });
    shell.exec('git config -l', { async: false });
};


argv0 === 'james' ? registryToself() : registryToEcej();
