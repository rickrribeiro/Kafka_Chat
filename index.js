const express = require('express')
const app = express()
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log("To na porta 3000")
})