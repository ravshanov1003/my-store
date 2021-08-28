const jwt = require('jsonwebtoken')

async function checkUser(req, res, next) {
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer')) {
        token = authorization.split(" ")[1];
        if (!token) {
            res.status('401').send({
                message: 'Auth error'
            })
        }
        let decoded = jwt.verify(token, 'secret')
        req.user = decoded
        res.setHeader('Last-Modified', new Date().toUTCString())
        next()
    } else {
        res.status('401').send({
            message: 'Unauthorized'
        })
    }
}

module.exports = {
    checkUser,
}