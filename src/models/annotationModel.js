const database = require('../database/connection')

const getAllFromUser = async (id_user) => {
    const query = 'SELECT * FROM annotations WHERE id_user = ?;'
    const [result] = await database.execute(query, [id_user])
    const response = {
        annotations: result.map(annotation => {
            return {
                id_annotation: annotation.id,
                description: annotation.description,
                tag: annotation.tag,
                priority: annotation.priority,
                created_at: annotation.created_at
            }
        })
    }
    return response
}

const filterByTag = async (id_user, tag) => {
    const query = 'SELECT * FROM annotations WHERE id_user = ? AND tag = ?;'
    const [result] = await database.execute(query, [id_user, tag])
    const response = {
        annotations: result.map(annotation => {
            return {
                id_annotation: annotation.id,
                description: annotation.description,
                tag: annotation.tag,
                priority: annotation.priority,
                created_at: annotation.created_at
            }
        })
    }
    return response
}

const filterByPriority = async (id_user, priority) => {
    const query = 'SELECT * FROM annotations WHERE id_user = ? AND priority = ?;'
    const [result] = await database.execute(query, [id_user, priority])
    const response = {
        annotations: result.map(annotation => {
            return {
                id_annotation: annotation.id,
                description: annotation.description,
                tag: annotation.tag,
                priority: annotation.priority,
                created_at: annotation.created_at
            }
        })
    }
    return response
}

const findByTerm = async (id_user, term) => {
    const query = 'SELECT * FROM annotations WHERE id_user = ? AND description LIKE CONCAT(\'%\', ?,\'%\');'
    const [result] = await database.execute(query, [id_user, term])
    const response = {
        annotations: result.map(annotation => {
            return {
                id_annotation: annotation.id,
                description: annotation.description,
                tag: annotation.tag,
                priority: annotation.priority,
                created_at: annotation.created_at
            }
        })
    }
    return response
}

const getByID = async (id) => {
    const query = 'SELECT * FROM annotations WHERE id = ?;'
    const [result] = await database.execute(query, [id])
    const response = result.map(annotation => {
        return {
            id_annotation: annotation.id,
            description: annotation.description,
            tag: annotation.tag,
            priority: annotation.priority,
            created_at: annotation.created_at
        }
    })
    return response
}

const create = async (id_user, annotation) => {
    const { description, tag, priority } = annotation
    const dateUTC = new Date(Date.now()).toUTCString()
    const query = 'INSERT INTO annotations (description, tag, priority, created_at, id_user) VALUES (?, ?, ?, ?, ?);'
    await database.execute(query, [description, tag, priority, dateUTC, id_user])
}

const update = (id, annotation) => {
    const { description, tag, priority } = annotation
    const query = 'UPDATE annotations SET description = ?, tag = ?, priority = ? WHERE id = ?;'
    database.execute(query, [description, tag, priority, id])
}

const remove = async (id) => {
    const query = 'DELETE FROM annotations WHERE id = ?;'
    await database.execute(query, [id])
}

module.exports = {
    getAllFromUser,
    filterByTag,
    filterByPriority,
    findByTerm,
    getByID,
    create,
    update,
    remove
}