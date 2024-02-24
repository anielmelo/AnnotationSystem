const express = require('express')
const checkToken = require('./middlewares/authMiddleware');
const userController = require('../src/controllers/userController')
const annotationController = require('../src/controllers/annotationController');

const router = express.Router();

// rotas de autenticação
router.post('/auth/register', userController.register)
router.post('/auth/login', userController.login)

// rotas de usuário
router.get('/user/:id_user', userController.getByID)
router.post('/user/:id_user', userController.update)

// rotas de anotações
router.get('/user/:id_user/annotations', checkToken, annotationController.getAllFromUser) 
router.post('/user/:id_user/annotations', annotationController.create) 
router.put('/annotations/:id', annotationController.update) 
router.delete('/annotations/:id', annotationController.remove) 

module.exports = router