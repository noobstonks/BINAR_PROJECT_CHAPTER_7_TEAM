//import express
//import ejs
//public static express

const express = require ('express');
const ejs = require('ejs')
const app = express();
let data = require('./database.json')


const port = 2021;

app.use(express.static(__dirname + '/public'));

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'ejs');

app.get ('/', (req,res)=>{
    res.status(200).render('home')
})


// app.get('/login', (req,res)=>{
//     res.render('login')
// })

// app.post('/login', (req,res)=>{
//     if(req.body.username.trim() === "andro" && req.body.password.trim() === "test123"){
//         res.redirect('/')
//     }
//     else {
//         res.send("You're not authorized")
//     }
// })

app.get('/login', (req,res)=>{
    res.status(200).render('login')
})

app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    for (let check in data) {
        if (data[check].usernamejson === username && data[check].passwordjson === password ){
            res.status(304).redirect('/')
        }
        else {
            res.send("You're not authorized")
        }
    }
})


app.get('/game', (req,res)=>{
    res.render('game')
})

app.listen(port, ()=>{
    console.log("server menyala")
})

//satu rute dua method, app.get (tampil) - app.post(baca isi)

//yang dilakukan
//1. bikin form login.ejs , test apakah bisa redirect atau tidak (clear)
//2. mulai masukkan direktori gambar ke dalam img
//3. Masukkan direktori skrip (js dan css) ke dalam assets
//4. Masukkan file index ke dalam home.ejs
//5. masukkan file paper rock scissors ke dalam home.ejs
//6. Ubah bootstrap menjadi pemanggilan cdn (gagal)



//1. membetulkan seluruh source untuk home.ejs

