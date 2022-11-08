const fs = require('fs');
const path = require('path');

let siteName = '';
class Init {
    ChoiseSite(req) {
        switch (req.url) {
            case '/':
                siteName = 'home.html';
                break
            case '/linux':
                siteName = 'linux.html';
                break
            case '/windows':
                siteName = 'windows.html';
                break
            default:
                siteName = 'error.html';
        }
        return path.join(__dirname, siteName);
    }

    putSite(req, res) {
        fs.readFile(choiseSite(req), (err, content) => {
            if (err) {
                throw err;
            } else {
                res.end(content);
            }
        });
    }
}
module.exports = Init