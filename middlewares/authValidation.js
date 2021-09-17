function authValidation(req, res, next) {
    const { username, password } = req.body;
    let errors = [];
    if (!username) {
        errors.push('Username is required')
    }
    if (!password) {
        errors.push('Password is required')
    }
    if (errors.length) {
        res.status(400).send({
            errors
        })
    } else {
        next()
    }
}

module.exports = {
    authValidation
}