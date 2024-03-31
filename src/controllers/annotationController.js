const annotationModel = require('../models/annotationModel')

const getAllFromUser = async (request, response) => {
    const { id_user } = request.params

    try {
        const annotations = await annotationModel.getAllFromUser(id_user)
        return response.status(200).json(annotations)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot get!' })
    }
}

const getByID = async (request, response) => {
    const { id } = request.params

    try {
        const annotation = await annotationModel.getByID(id)
        return response.status(200).json(annotation)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot get!' })
    }
}

const filterByTag = async (request, response) => {
    const { id_user } = request.params
    const { tag } = request.query

    try {
        const annotations = await annotationModel.filterByTag(id_user, tag)
        return response.status(200).json(annotations)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot filter by tag!' })
    }
}

const filterByPriority = async (request, response) => {
    const { id_user } = request.params
    const { priority } = request.query

    try {
        const annotations = await annotationModel.filterByPriority(id_user, priority)
        return response.status(200).json(annotations)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot filter by priority!' })
    }
}

const findByTerm = async (request, response) => {
    const { id_user } = request.params
    const { term } = request.query

    try {
        const annotations = await annotationModel.findByTerm(id_user, term)
        return response.status(200).json(annotations)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot find by term!' })
    }
}

const create = async (request, response) => {
    const { description, tag, priority } = request.body
    const { id_user } = request.params

    try {
        await annotationModel.create(id_user, { description, tag, priority })
        return response.status(201).json({ msg: 'Annotation successfully created!' })
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot create!' })
    }
}

const update = async (request, response) => {
    const { id } = request.params
    const { description, tag, priority } = request.body

    try {
        await annotationModel.update(id, { description, tag, priority })
        return response.status(204).json({ msg: 'Annotation successfully updated!' })
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot update!' })
    }
}

const remove = async (request, response) => {
    const { id } = request.params

    try {
        await annotationModel.remove(id)
        return response.status(204).json({ msg: 'Annotation successfully removed!' })
    } catch (error) {
        console.log(error)
        return response.status(500).json({ msg: 'Cannot remove!' })
    }
}

module.exports = {
    getAllFromUser,
    getByID,
    filterByTag,
    filterByPriority,
    findByTerm,
    create,
    update,
    remove
}