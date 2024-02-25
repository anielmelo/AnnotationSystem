const database = require('../database/connection')

const getByID = async (id) => { 
    const query = 'SELECT * FROM users WHERE id = ?;'
    const [result] = await database.execute(query, [id])
    const response = result.map(user => {
        return {
            id_user: user.id,
            nameCredential: user.nameCredential,
            namePresentation: user.namePresentation,
            password: user.password
        }
    })
    return response
}

const getByName = async (nameCredential) => {
    const query = 'SELECT * FROM users WHERE nameCredential = ?;'
    const [result] = await database.execute(query, [nameCredential])
    const response = result.map(user => {
        return {
            id_user: user.id,
            nameCredential: user.nameCredential,
            namePresentation: user.namePresentation,
            password: user.password
        }
    })
    return response
}

const create = async (user) => { 
    const { nameCredential, namePresentation, password } = user
    const query = 'INSERT INTO users (nameCredential, namePresentation, password) VALUES (?, ?, ?);'
    await database.execute(query, [nameCredential, namePresentation, password])
}

const update = async (id, user) => {
    const { nameCredential, namePresentation, password } = user
    const query = 'UPDATE users SET nameCredential = ?, namePresentation = ?, password = ? WHERE id = ?;'
    await database.execute(query, [nameCredential, namePresentation, password, id])
}

const remove = async (id) => {
    const query = 'DELETE FROM users WHERE id = ?;'
    await database.execute(query, [id])
}

module.exports = {
    getByID,
    getByName,
    create,
    update,
    remove
}