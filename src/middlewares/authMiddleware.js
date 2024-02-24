require('dotenv').config()
const jwt = require('jsonwebtoken')

const checkToken = (request, response, next) => {
    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) {
        return response.status(401).json({ msg: 'Access denied!' })
    }

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)

        next()
    } catch (error) {
        console.log(error)
        return response.status(400).json({ msg: 'Invalid token!' })
    }
}

module.exports = checkToken