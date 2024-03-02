require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const getByID = async (request, response) => {
    const { id_user } = request.params

    try {
        const [user] = await userModel.getByID(id_user)
        return response.status(200).json(user)
    } catch (error) {
        console.log(error)
        return response.status(404).json({ msg: 'User not found!' })
    }
}

const getByName = async (request, response) => {
    const { nameCredential } = request.body

    try {
        const user = await userModel.getByName(nameCredential)
        return response.status(200).json(user)
    } catch (error) {
        console.log(error)
        return response.status(404).json({ msg: 'User not found!' })
    }
}

const login = async (request, response) => {
    const { nameCredential, password } = request.body

    const [user] = await userModel.getByName(nameCredential)
    
    if(!user) {
        return response.status(422).json({ msg: 'User not found!' })
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword) {
        return response.status(422).json({ msg: 'Credential invalid!' })
    }

    try {
        const secret = process.env.SECRET
    
        const token = jwt.sign({
            user_id: user.id
        }, secret)
    
        return response.status(200).json({ msg: 'Successfully Authenticated!', token })
    } catch (error) {
        console.log(error)
        return response.status(400).json({ msg: 'User not Authenticated!' })
    }

}

const register = async (request, response) => {
    const { nameCredential, namePresentation, password } = request.body

    const [user] = await userModel.getByName(nameCredential)

    if(user) {
        return response.status(400).json({msg: 'User already exist!'})
    }

    try {
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        await userModel.create({ nameCredential, namePresentation, password:passwordHash })
        return response.status(201).json({ msg: 'User successfully registered!' })
    } catch (error) {
        console.log(error)
        return response.status(400).json({ msg: 'User cannot be registered!' })
    }
}

const update = async (request, response) => {
    const { id_user } = request.params
    const { nameCredential, namePresentation, password } = request.body

    try {
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        await userModel.update(id_user, { nameCredential, namePresentation, password:passwordHash })
        return response.status(204).json({ msg: 'User successfully updated!' })
    } catch (error) {
        console.log(error)
        return response.status(400).json({ msg: 'User cannot be updated!' })
    }
}

const remove = async (request, response) => {
    const { id } = request.params

    try {
        await userModel.remove(id)
        return response.status(204)
    } catch (error) {
        console.log(error)
        return response.status(400).json({ msg: 'User cannot be deleted!' })
    }
}

module.exports = {
    getByName,
    getByID,
    login,
    register,
    update,
    remove
}