const validateNameCredential = (request, response, next) => {
    const { body } = request;
    
    if (body.nameCredential === undefined) {
        return response.status(400).json({ msg: 'The field is required.' });
    }
    
    if (body.nameCredential === '') {
        return response.status(400).json({ msg: 'Username cannot be empty.' });
    }
    
    const nameCredentialPattern = '^[a-zA-Z0-9]{1,12}$';
    const regex = new RegExp(nameCredentialPattern);
    
    if (regex.test(body.nameCredential) === false) {
        return response.status(400).json({ msg: 'Username invalid.' });
    }

    next();
}

const validateNamePresentation = (request, response, next) => {
    const { body } = request;
    
    if (body.namePresentation === undefined) {
        return response.status(400).json({ msg: 'The field is required.' });
    }
    
    if (body.namePresentation === '') {
        return response.status(400).json({ msg: 'Name cannot be empty.' });
    }
    
    const namePresentationPattern = '^[a-zA-Z]{1,18}(?: [a-zA-Z]{1,18})?$';
    const regex = new RegExp(namePresentationPattern);
    
    if (regex.test(body.namePresentation) === false) {
        return response.status(400).json({ msg: 'Name invalid.' });
    }

    next();
}

const validatePassword = (request, response, next) => {
    const { body } = request;
    
    if (body.password === undefined) {
        return response.status(400).json({ msg: 'The field is required.' });
    }
    
    if (body.password === '') {
        return response.status(400).json({ msg: 'Password cannot be empty.' });
    }
    
    const passwordPattern = '^.{1,12}$';
    const regex = new RegExp(passwordPattern);
    
    if (regex.test(body.password) === false) {
        return response.status(400).json({ msg: 'Password invalid.' });
    }

    next();
}

module.exports = {
    validateNameCredential,
    validateNamePresentation,
    validatePassword
}