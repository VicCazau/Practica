// RUTAS DE MEDICOS

const router = require("express").Router(); // importar express.Router()

const medicoController = require('../controllers/medico.controller') // importar el archivo de controladores de medicos


router.get('/prueba', medicoController.listarUno)
router.get('/', medicoController.listarTodos)
router.post('/', medicoController.crear)




module.exports = router;