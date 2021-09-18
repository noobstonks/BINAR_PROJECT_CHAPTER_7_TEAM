const {user_game_biodata} = require ('./models')

user_game_biodata.destroy ({
    where: {
    id: 12
}
})

.then(()=> console.log("Artikel yang belum diapprove telah dihapus"))