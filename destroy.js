const {user_game} = require ('./models')

user_game.destroy ({
    where: {
    id: 11
}
})

.then(()=> console.log("Artikel yang belum diapprove telah dihapus"))