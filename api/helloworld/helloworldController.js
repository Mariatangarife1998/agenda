const hello = (req, res)=>{
    res.json({msj: 'hello world'})
}

const sayHi = (req, res)=>{
    const {name} = req.params
    res.json({msj: `hello world ${name}`})
}

module.exports = {
    hello,
    sayHi
}