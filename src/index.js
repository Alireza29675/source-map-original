const ora = require('ora');
const jsExtractor = require('./jsExtractor');
const sourceMapExtractor = require('./sourceMapExtractor');
const contentExtractor = require('./contentExtractor');
const consumeSourceMapToFiles = require('./consumeSourceMapToFiles');

module.exports = async function extract({ url: siteUrl, outputPath }){
  let jsURLs = [];
  
  const jsURLSpinner = ora('Extracting JS URLs from provided URL...').start();
  try {
    jsURLs = await jsExtractor(siteUrl);
  } catch(e) {
    jsURLSpinner.fail('Could not load URL!');
    process.exit();
  }
  jsURLSpinner.succeed('JS URLs extracted!');
  
  const sourceMapURLSpinner = ora('Extracting source map URLs from JS content...').start();
  const sourceMapURLs = await sourceMapExtractor(jsURLs);
  sourceMapURLSpinner.succeed('Source map URLs extracted!');
  
  const sourceMapContentsSpinner = ora('Extracting source map contents...').start();
  const sourceMapContents = await contentExtractor(sourceMapURLs);
  sourceMapContentsSpinner.succeed('Source map contents extracted!');
  
  const consumeSpinner = ora('Generating files based on source maps...').start();
  await consumeSourceMapToFiles({ sourceMapContents, outputPath });
  consumeSpinner.succeed(`Original source code generated under ${outputPath}!`);
}
