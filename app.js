const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let items = ["Buy food.", "Cook food", "Eat food"];
let workItems = [];

app.get('/', (req, res) => {
    let day = date.getDate();
    res.render('list', {listType: day, items: items});
});

app.post("/", (req, res) => {
    let listItem = req.body.listItem;

    console.log(req.body.list);
    if(req.body.list === "Work"){
        workItems.push(listItem);
        res.redirect("/work");
    }else{
        items.push(listItem);
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {
    res.render("list", {listType:"Work List", items: workItems});
});

// app.post("/work", (req, res) => {
//     let item = req.body.listItem;
//     items.push(item);
// });

app.get("/about", (req, res) => {
    res.render("about");
})

app.listen(3000, () => console.log("Listening on port 3000"));