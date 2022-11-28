const express = require('express');

const app = express();
const PORT = 4000

app.get('/', (req, res) => {
    res.render('pages/home.ejs');
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`);});