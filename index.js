#!/usr/bin/env node

const yargs = require('yargs');
const transformOutput = require('./transformOutput')
const extract = require('./src');

const argv = yargs
    .option('url', {
        alias: 'u',
        description: 'The url to the website',
        type: 'string',
    })
    .option('output', {
        alias: 'o',
        description: 'The output folder',
        type: 'string',
    })
    .demandOption(['url'], 'Please specify the url!')
    .help()
    .alias('help', 'h')
    .argv;


const outputPath = transformOutput({
    url: argv.url,
    output: argv.output
})

console.log(outputPath)

// extract({
//     url: argv.url,
//     output: outputPath,
// });