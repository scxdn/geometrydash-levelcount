const app = require('express')();
app.use(require('cors')('*'));
const fetch = require('node-fetch');

app.get('/', (req, res) => {
    fetch(`https://gdbrowser.com/api/search/*?page=0&count=10&type=recent`).then((resp) => resp.json()).then((data) => {
    res.json({
        count: data[0].id,
        name: data[0].name,
        stars: data[0].starsRequested
    })
});
});
app.listen(6969);