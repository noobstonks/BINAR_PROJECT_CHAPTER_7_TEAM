

const express = require ('express');
const ejs = require('ejs')
const app = express();
let data = require('./database.json')

const { user_game } = require ('./models');

app.use(express.urlencoded({extended:false}))


const port = 2021;

app.use(express.static(__dirname + '/public'));

app.use(express.json())


app.set('view engine', 'ejs');

app.get ('/', (req,res)=>{
    res.status(200).render('home')
})


app.get('/login', (req,res)=>{
    res.status(200).render('login')
})

app.post('/login', (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    if (data.find(o=> o.usernamejson === username && o.passwordjson === password )) {
        res.redirect('/users')
    }
    else {
        res.send("youre not authorized")
    }
})


app.get('/game', (req,res)=>{
    res.render('game')
})

// app.get('/users', (req,res)=>{
//     res.render('users/index')
// })

app.get ('/users', (req,res)=>{
    user_game.findAll()
    .then((user)=>{
        res.render ('users/index', {
            user
        })
    })
})

app.listen(port, ()=>{
    console.log("server menyala")
})


