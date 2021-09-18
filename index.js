

const express = require ('express');
const ejs = require('ejs')
const app = express();
let data = require('./database.json')

const { user_game, user_game_biodata } = require ('./models');

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


app.get ('/users', (req,res)=>{
    user_game.findAll()
    .then((user)=>{
        res.render ('users/index', {
            user
        })
    })
})

app.get ('/users/create', (req,res)=>{
    res.render('users/create')
})

app.post('/users', (req,res)=>{
    user_game.create({
        username: req.body.username,
        password: req.body.password
    })
    user_game_biodata.create({
        nama: req.body.nama
    })
    .then(()=>{
        res.send('data user berhasil dibuat')
    })
})

app.get('/users/:id', (req,res)=>{
    user_game.findOne({
        where: {id: req.params.id}
    })
    .then(users=>{ 
        res.render ('users/detail', {
            users
        })
    })
})

app.get('/users/delete/:id', (req,res)=>{
    user_game.destroy({ where: {id: req.params.id}})
    .then(()=>{
        res.send('data user berhasil dihapus')
    })
})

app.get('/users/update/:id', (req,res)=>{
    user_game.findOne({where: {id: req.params.id}})
    .then(users=>{ 
        res.render ('users/update', {
            users
        })
    })
})

app.post('/users/update/:id', (req,res)=>{
    user_game.update({
        username: req.body.username,
        password: req.body.password
    },{where: {id:req.params.id}
})
    user_game_biodata.update({
        nama: req.body.nama
    },{where: {id:req.params.id}
})
    .then(()=>{
        res.send('data user berhasil di update')
    })
})



app.listen(port, ()=>{
    console.log("server menyala")
})


