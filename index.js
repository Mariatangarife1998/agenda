const express = require('express')
const morgan = require('morgan')

const app = express()

app.listen(3001,()=>{
    console.log('server running on http://localhost:3001/api/persons');
});

app.use(morgan({
    connectionString: 'localhost:3001'
}));

const personas = [
    {
        id:1,
        name : "Arto Hellas",
        number : "040-123456"
    },
    {
        id:2,
        name : "Ada Lovelace",
        number : "39-44-5323523"
    },
    {
        id:3,
        name : "Dan Abramov",
        number : "12-43-234345"
    },
    {
        id:4,
        name : "Mary Poppendick",
        number : "39-23-6423122"
    }

];

app.get('/api/persons',(req,res)=>{
    res.json(personas);
});

app.get('/info', (req, res) => {
    res.send("<strong>Phonebook has info for " + personas.length +  " people " +"<br><br>" +new Date() +"</strong>");
});

app.get('/api/persons/:id', (req, res) => {
    const idPerson  = Number(req.params.id);
    const selectedPerson = personas.find(item => item.id === idPerson);

    if(selectedPerson){
        res.json(selectedPerson);
    }else {
        resp.status(404).end();
    }
    

});

app.delete("/api/persons/delete/:id", (req, res) =>{ 
    const  { id } = req.params;
    const resultPersons = personas.filter(item => item.id !== Number(id))
    res.send(resultPersons);
   });

app.post("/api/persons/newPersons/:name", (req, res) => {
const newPerson = req.body.name;
personas.push({
    id: Math.random() * 100,
    name: req.params.name,
    number: req.params.number
    
}); 
    
    res.redirect("/api/persons");
});
// console.log(personas);

