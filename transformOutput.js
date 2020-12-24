const path = require('path');

const currentPath = process.cwd();

module.exports = function transformOutput({ output }) {
    return path.join(currentPath, output)
}