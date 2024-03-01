const express = require('express')
const checkToken = require('./middlewares/authMiddleware')
const userMiddleware = require('./middlewares/userMiddleware')
const annotationMiddleware = require('./middlewares/annotationMiddleware')
const userController = require('../src/controllers/userController')
const annotationController = require('../src/controllers/annotationController')

const router = express.Router();

router.get('/', (request, response) => {return response.send('hello world!')})

// rotas de autenticação
router.post('/auth/register', 
    userMiddleware.validateNameCredential,
    userMiddleware.validateNamePresentation,
    userMiddleware.validatePassword,
    userController.register)

router.post('/auth/login', 
    userMiddleware.validateNameCredential,
    userMiddleware.validatePassword,
    userController.login)

// rotas de usuário
router.get('/user/:id_user', userController.getByID)

router.put('/user/:id_user', userController.update)

// rotas de anotações
router.get('/user/:id_user/annotations', checkToken, annotationController.getAllFromUser) 

router.post('/user/:id_user/annotations', 
    annotationMiddleware.validateDescription,
    annotationMiddleware.validatePriority,
    annotationMiddleware.validateTag,
    annotationController.create) 

router.put('/annotations/:id', annotationController.update) 

router.delete('/annotations/:id', annotationController.remove) 

module.exports = router