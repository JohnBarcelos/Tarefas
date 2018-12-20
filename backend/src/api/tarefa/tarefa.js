const restful = require('node-restful')
const mongoose = restful.mongoose

const Schema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    dataCriado: { type: Date, default: Date.now }
})

module.exports = restful.model('Tarefa', Schema)