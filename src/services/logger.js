const chalk = require('chalk');

exports.error = (message, details)=>{
    if(!details) console.log(chalk`{red.bold Error:} ${message}`);
    else console.log(chalk`{red.bold Error:} ${message}\n{magenta.bold Details:} ${details}`);
}

exports.success = (message, details)=>{
    if(!details) console.log(chalk`{green.bold Success:} ${message}`);
    else console.log(chalk`{green.bold Success:} ${message}\n{magenta.bold Details:} ${details}`);
}

exports.warn = (message, details)=>{
    if(!details) console.log(chalk`{yellow.bold Warning:} ${message}`);
    else console.log(chalk`{yellow.bold Warning:} ${message}\n{magenta.bold Details:} ${details}`);
}