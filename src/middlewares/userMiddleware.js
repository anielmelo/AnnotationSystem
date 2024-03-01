const validateNameCredential = (request, response, next) => {
    const { body } = request;
    
    if (body.nameCredential === undefined) {
        return response.status(400).json({ message: 'The field is required.' });
    }
    
    if (body.nameCredential === '') {
        return response.status(400).json({ message: 'This credential cannot be empty.' });
    }
    
    const nameCredentialPattern = '^[a-zA-Z0-9]{1,12}$';
    const regex = new RegExp(nameCredentialPattern);
    
    if (regex.test(body.nameCredential) === false) {
        return response.status(400).json({ message: 'Credential invalid.' });
    }

    next();
}

const validateNamePresentation = (request, response, next) => {
    const { body } = request;
    
    if (body.namePresentation === undefined) {
        return response.status(400).json({ message: 'The field is required.' });
    }
    
    if (body.namePresentation === '') {
        return response.status(400).json({ message: 'Name cannot be empty.' });
    }
    
    const namePresentationPattern = '^[a-zA-Z]{1,18}(?: [a-zA-Z]{1,18})?$';
    const regex = new RegExp(namePresentationPattern);
    
    if (regex.test(body.namePresentation) === false) {
        return response.status(400).json({ message: 'Name invalid.' });
    }

    next();
}

const validatePassword = (request, response, next) => {
    const { body } = request;
    
    if (body.password === undefined) {
        return response.status(400).json({ message: 'The field is required.' });
    }
    
    if (body.password === '') {
        return response.status(400).json({ message: 'This credential cannot be empty.' });
    }
    
    const passwordPattern = '^.{1,12}$';
    const regex = new RegExp(passwordPattern);
    
    if (regex.test(body.password) === false) {
        return response.status(400).json({ message: 'Credential invalid.' });
    }

    next();
}

module.exports = {
    validateNameCredential,
    validateNamePresentation,
    validatePassword
}