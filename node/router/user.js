const { Router } = require("express")
const {
    getAllController,
    getUserControllerID,
    postUserController,
    pathUserController,
    deleteUserController
} = require("../controller/user")

const router = Router()

//Listar todos os calendários
router.get('/', getAllController)

//Listar apenas um dia espeficico
router.get('/:id', getUserControllerID)

// //Inserir um novo registro
router.post('/', postUserController)

// //Atualizar um registro
router.patch('/:id', pathUserController)

// // Deletar um registro
router.delete('/:id', deleteUserController)

module.exports = router