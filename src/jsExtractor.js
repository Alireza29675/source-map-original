const http = require('./services/http');
const removeFirstAndLastSlashes = require('./utils/removeFirstAndLastSlashes');

const scriptRegExp = /<\s*script\s*src\s*=("|')(.*?\.js)(\1).*?>.*?<\s*?\/\s*?script\s*?>/gi
const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i

module.exports = function jsExtractor(address){
    return http(address).then(res => res.text()).then((res)=>{
        const jsFileURLs = [];

        const matchResults = res.matchAll(scriptRegExp);

        for(const match of matchResults){
            const jsURL = match[2];

            if(urlRegExp.test(jsURL)) {
                jsFileURLs.push(jsURL);
            } else {
                const URLWithoutFirstSlash = removeFirstAndLastSlashes(jsURL);
                const URLWithDomainPrefix = `${address}/${URLWithoutFirstSlash}`;
                jsFileURLs.push(URLWithDomainPrefix);
            }
        }

        return jsFileURLs;
    });
}