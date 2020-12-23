#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
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
    .demandOption(['url', 'output'], 'Please specify both the url and the output folder!')
    .help()
    .alias('help', 'h')
    .argv;


const outputPath = path.join(process.cwd(), argv.output);

extract({
    url: argv.url,
    outputPath,
});