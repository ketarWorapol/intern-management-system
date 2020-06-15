const express = require("express");
const app = express();

app.use(express.static('./dist/IMS/'));

app.get('/*', function(req, res){
    res.sendFile('index.html', {root : 'dist/IMS/'});
})

app.listen(process.env.PORT || 8080);

module.exports = app;