const { Router } = require('express')
const personas = require('../../list')

const info = new Router()

info.get('/api/info', (req, res)=>{
    res.send(`<strong>Phonebook has info for${personas.length}people<br></br>${new Date()}</strong>`);
});

module.exports = info