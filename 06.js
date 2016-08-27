#!/usr/bin/env node

"use strict"

//////////////////////////////// ANSI EXAMPLES ////////////////////////////////
// // From:
// console.log('It is \u001b[31mnot\u001b[39m easy to use \u001b[32mhardcoded \u001b[1mANSI\u001b[39m\u001b[22m codes!')
// // To:
// const red = string => `\u001b[31m${string}\u001b[39m`
// const green = string => `\u001b[32m${string}\u001b[39m`
// const bold = string => `\u001b[1m${string}\u001b[22m`
// console.log(`It is ${red('easier')} to use ${green('functions for')} ${green(bold('ANSI'))} codes!`)


//////////////////////////////// CHALK EXAMPLES ////////////////////////////////
const chalk = require('chalk');
// style a string 
// process.stdout.write(chalk.blue('Hello world!'));
 
// combine styled and normal strings 
// process.stdout.write(chalk.blue('Hello') + 'World' + chalk.red('!'));
 
// compose multiple styles using the chainable API 
// process.stdout.write(chalk.blue.bgRed.bold('Hello world!'));
 
// pass in multiple arguments 
// process.stdout.write(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// nest styles 
// process.stdout.write(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// nest styles of the same type even (color, underline, background) 
// process.stdout.write(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));


///////////////////////////////////// FLAG /////////////////////////////////////
const repl = require('repl');

const red = chalk.bgRed
const white = chalk.bgWhite
const blue = chalk.bgBlue
// const stars1 = " * * * * * * * * "                                     // 17 wide 8 stars
// const stars1 = "  * * * * * * *  "                                     // 17 wide 8 stars
// const nextTo = "                                 "                     // 33 wide for finishing lines

const w = `\u2B50`;                                                       // BONUS using EMOJI - STAR! U+2B50
const stars1 = ` ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  `        // BONUS using EMOJI - 25 wide 8 stars
const stars2 = `   ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}   `           // BONUS using EMOJI - 25 wide 7 stars
const nextTo = "                         "                                // BONUS using EMOJI - 25 wide for finishing lines
const lnOnly = "                                                  "       // 50 wide for lines with no stars


////////////////////////////// ORIGINAL VERSION /////////////////////////////////
// console.log(chalk.gray("12345678902234567890323456789042345678905234567890"));  // Measure the line width (50 wide per instructions)
// process.stdout.write(`${blue(stars1)}${red(nextTo)}\n`)
// process.stdout.write(`${blue(stars2)}${white(nextTo)}\n`)
// process.stdout.write(`${blue(stars1)}${red(nextTo)}\n`)
// process.stdout.write(`${blue(stars2)}${white(nextTo)}\n`)
// process.stdout.write(`${blue(stars1)}${red(nextTo)}\n`)
// process.stdout.write(`${blue(stars2)}${white(nextTo)}\n`)

// process.stdout.write(`${red(lnOnly)}\n`)
// process.stdout.write(`${white(lnOnly)}\n`)
// process.stdout.write(`${red(lnOnly)}\n`)
// process.stdout.write(`${white(lnOnly)}\n`)
// process.stdout.write(`${red(lnOnly)}\n`)
// process.stdout.write(`${white(lnOnly)}\n`)
// process.stdout.write(`${red(lnOnly)}\n`)


/////////////////// CLEANED UP VERSION (could go further...) ///////////////////
process.stdout.write(`${blue(stars1)}${red(nextTo)}\n${blue(stars2)}${white(nextTo)}\n`)
process.stdout.write(`${blue(stars1)}${red(nextTo)}\n${blue(stars2)}${white(nextTo)}\n`)
process.stdout.write(`${blue(stars1)}${red(nextTo)}\n${blue(stars2)}${white(nextTo)}\n`)

process.stdout.write(`${red(lnOnly)}\n${white(lnOnly)}\n`)
process.stdout.write(`${red(lnOnly)}\n${white(lnOnly)}\n`)
process.stdout.write(`${red(lnOnly)}\n${white(lnOnly)}\n`)
process.stdout.write(`${red(lnOnly)}\n`)
