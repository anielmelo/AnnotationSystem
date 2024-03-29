const validateDescription = (request, response, next) => {
    const { body } = request
    
    if (body.description === undefined) {
        return response.status(400).json({ msg: 'The field is required.' })
    }
    
    if (body.description === '') {
        return response.status(400).json({ msg: 'Description cannot be empty.' })
    }
    
    const descriptionPattern = '^.{1,120}$';
    const regex = new RegExp(descriptionPattern)
    
    if (regex.test(body.description) === false) {
        return response.status(400).json({ msg: 'Description invalid.' })
    }

    next()
}

const validateTag = (request, response, next) => {
    const { body } = request

    if (body.tag === undefined) {
        return response.status(400).json({ msg: 'The field is required.' })
    }

    if (body.tag === '') {
        return response.status(400).json({ msg: 'Tag cannot be empty.' })
    }

    const tagPattern = '^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,12}$'
    const regex = new RegExp(tagPattern)

    if (regex.test(body.tag) === false) {
        return response.status(400).json({ msg: 'Tag invalid.' })
    }

    next()
}

const validatePriority = (request, response, next) => {
    const { body } = request

    if (body.priority === undefined) {
        return response.status(400).json({ msg: 'The field is required.' })
    }

    if (body.priority === '') {
        return response.status(400).json({ msg: 'Priority cannot be empty.' })
    }

    next()
}

module.exports = {
    validateDescription,
    validateTag,
    validatePriority
}
