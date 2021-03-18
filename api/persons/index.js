const { Router } = require('express')
const personas = require('../../list')

const persons = new Router()

persons.get('/api/persons/', (req, res)=>{
    res.json(personas);
})

persons.get('/api/persons/:id', (req, res) => {
    const idPerson  = Number(req.params.id);
    const selectedPerson = personas.find(item => item.id === idPerson);

    if(selectedPerson){
        res.json(selectedPerson);
    }else {
        resp.status(404).end();
    }
});

persons.delete("/api/persons/delete/:id", (req, res) =>{ 
    const  { id } = req.params;
    const resultPersons = personas.filter(item => item.id !== Number(id))
    res.send(resultPersons);
});

persons.post("/api/persons/newPersons", (req, resp) => {
    const newPerson = req.body
    console.log(newPerson);
    const resultPersons = personas.concat(newPerson)
    console.log(resultPersons)
    resp.status(201).json(resultPersons)
});

module.exports = persons
