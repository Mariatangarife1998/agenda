const { Router } = require('express')

const controller = require ('./helloworldController')

const router = new Router()

router.get('/', controller.hello)

router.get('/:name', controller.sayHi)

// router.get('/api/helloworld', (req, res)=>{
//     res.json({"msj":'hello world'})
//     })

module.exports = router
