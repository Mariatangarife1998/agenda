const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routesConfig = require('./routes')//se importa el archivo rutas

const app = express() 

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

routesConfig(app) //se importa el archivo rutas

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

//module.exports

// (async()=>{
//     const response = await fetch('https://stormy-citadel-83728.herokuapp.com/api/persons')
//     const users = await response.json()
//     console.log(users)
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('server running', PORT)
})


