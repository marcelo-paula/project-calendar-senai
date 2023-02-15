const { Router } = require("express")
const {
    getAllCalendar,
    getCalendarControllerID,
    postCalendarController,
    pathCalendarController,
    deleteCalendarController
} = require("../controller/calendar")

const router = Router()

//Listar todos os calendários
router.get('/:year', getAllCalendar)

//Listar apenas um dia espeficico
router.get('/:id', getCalendarControllerID)

// //Inserir um novo registro
router.post('/:year', postCalendarController)

// //Atualizar um registro
router.patch('/:id', pathCalendarController)

// // Deletar um registro
router.delete('/:id', deleteCalendarController)

module.exports = router