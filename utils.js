const requestLogger = (req, res, next)=>{
    console.log('Method', req.method)
    console.log('Path: ', req.path)
   next() 
}

module.exports = {
    requestLogger
}