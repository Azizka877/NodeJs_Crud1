const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ClubSchema = new Schema({
    nom : {
        type: String,
        required: true,
    },
    players: {
        type: String,
        required: true,
    },
    coach : {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('club', ClubSchema);