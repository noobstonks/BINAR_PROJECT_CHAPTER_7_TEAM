const { user_game } = require ('./models');

user_game.create({
    username: 'andro',
    password: '123'
})

.then((user)=>{
    console.log(user)
})