let path = require('path');
let glob = require("glob");

function getEntry(globPath) {
    let pages = {};
    glob.sync(globPath).forEach(entry => {
        let basename = path.basename(entry, path.extname(entry));
        pages[basename] = {
            entry: entry,
            template: 'public/' + basename + '.html',
            filename: `${basename}.html`,
            chunks: [basename]
        }
        console.log(pages)
    })
}

module.exports = {
    pages: {
        main: {
            entry: './src/pages/main/main.ts',
            template: 'public/main.html',
            filename: 'main.html',
            chunks: ['main', 'main-vendor', 'main-common']
        },
        login: {
            entry: './src/pages/login/login.ts',
            template: 'public/login.html',
            filename: 'login.html',
            chunks: ['login', 'login-vendor', 'login-common']
        }
    }
}