const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

    let today = new Date().getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[today];
    let kindOfDay = 'Weekday';

    if(today === 6 || today === 0){
        kindOfDay = 'Weekend';
    }

    res.render('list', {day: day, kindOfDay: kindOfDay});
});
app.listen(3000, () => console.log("Listening on port 3000"));