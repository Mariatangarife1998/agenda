const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

morgan.token('myTokenBody', (req)=>{
    return JSON.stringify(req.body)
    // if(req.body){return JSON.stringify(req.body)}
    // return ''
}) 

app.use(
    morgan(
        ':method :url :status :res[content-length] :myTokenBody - :response-time ms'
    // connectionString: 'localhost:3001'
    )
)

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

app.post("/api/persons/newPersons", (req, resp) => {
    const newPerson = req.body
    console.log(newPerson);
    const resultPersons = personas.concat(newPerson)
    console.log(resultPersons)
    resp.status(201).json(newPerson)
});

// (async()=>{
//     const response = await fetch('https://stormy-citadel-83728.herokuapp.com/api/persons')
//     const users = await response.json()
//     console.log(users)
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('server running', PORT)
})


