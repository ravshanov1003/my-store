const checkPermission = (role) => {
    return async(req, res, next) => {
        try {
            console.log(role);
            if (req.user.role === role) {
                next()
            } else {
                res.status(403).send({
                    message: "You don't have permission"
                })
            }
        } catch (error) {
            res.status(500).send({
                message: "You don't have permission"
            })
        }
    }
}

module.exports = {
    checkPermission
}