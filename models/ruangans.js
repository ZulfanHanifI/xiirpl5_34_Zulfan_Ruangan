const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_ruangan:{
        type: String,
        required: [true, 'Silahkan Isikan Nama Ruangan'],
        unique: true
    },

    tipe_ruangan:{
        type: String,
        required: [true, 'Silahkan  Isikan Kelas'],
        unique: true
    },

    kapasitas:{
        type: String,
        required: [true, 'Silahkan  Isikan Kelas'],
        unique: true
    },

    kondisi:{
        type: String,
        required: [true, 'Silahkan  Isikan Kelas'],
        unique: true
    },

    letak_ruangan:{
        type: String,
        required: [true, 'Silahkan  Isikan Kelas'],
        unique: true
    },
})

module.exports = mongoose.model('Ruangan', UserSchema)