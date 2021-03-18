 const helloWorldApi = require('./api/helloworld')
 const personsApi = require('./api/persons')
 const infoApi = require('./api/info')
 
 const myFunctions = (app)=>{
   app.use('/api/helloworld', helloWorldApi)
   app.use(personsApi)
   app.use(infoApi)
   
}

module.exports = myFunctions
