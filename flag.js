// const bold = string => `\u001b[1m${string}\u001b[22m`
// const green = string => `\u001b[32m${string}\u001b[39m`
// const red = string => `\u001b[31m${string}\u001b[39m`
// console.log(`It is ${red('easier')} to use ${green('functions for')} ${green(bold('ANSI'))} codes!`)

const chalk = require('chalk');

// console.log(chalk.white.bgBlue('* * * * * * *', chalk.blue.bgRed.bold('                                  ')));
// console.log(chalk.blue.bgWhite.bold('                                  '));
// console.log(chalk.blue.bgRed.bold('                                  '));

let starRed = chalk.white.bgBlue('* * * * * * *', chalk.blue.bgRed.bold('                                  '));
let starWhite = chalk.white.bgBlue(' * * * * * * ', chalk.blue.bgWhite.bold('                                  '));
let longRed = chalk.blue.bgRed.bold('                                                ');
let longWhite = chalk.blue.bgWhite.bold('                                                ');

const flagMaker = ({starRed, starWhite, longRed, longWhite}) => {
    return new Promise( (resolve, reject) => {

    })
}

console.log(starRed);
console.log(starWhite);
console.log(starRed);
console.log(starWhite);
console.log(starRed);
console.log(longWhite);
console.log(longRed);
console.log(longWhite);
console.log(longRed);
console.log(longWhite);
console.log(longRed);
console.log(longWhite);
console.log(longRed);


