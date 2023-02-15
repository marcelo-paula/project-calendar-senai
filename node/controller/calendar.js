const calendarModel = require("../model/calendar/calendar")

// Listar todos
async function getAllCalendar(req, res){
    try {
        const year = req.params.year
        const getAllCalendar = await calendarModel.getAllCalendar(year)
        res.status(200).json({error: false, data: getAllCalendar})
    } catch (error) {
        res.status(401)
        res.json({error: error.message, data: false})
    }
}

// Listar por ID
function getCalendarControllerID(req, res){
    try {
        const id = req.params.id
        const getCalendarControllerID = calendarModel.getCalendarID(id)
        res.status(200).json({error: false, data: getCalendarControllerID})
    } catch (error) {
        res.status(401)
        res.json({error: error.message, data: false})
    }
}

// Inserir um registro
async function postCalendarController(req, res){
    try {
        const year = req.params.year
        const postCalendar = await calendarModel.postCalendar(year)
        res.status(200).json({error: false, data: postCalendar})
    } catch (error) {
        res.status(401)
        res.json({error: error.message, data: false})
    }
}

// Atualizar um registro
async function pathCalendarController(req, res){
    try {
        const id = req.params.id
        const pathCalendar = await calendarModel.pathCalendar(id)
        res.status(200).json({error: false, data: pathCalendar})
    } catch (error) {
        res.status(401)
        res.json({error: error.message, data: false})
    }
}

// Deletar um registro
async function deleteCalendarController(req, res){
    try {
        const id = req.params.id
        const deleteCalendar = await calendarModel.deleteCalendar(id)
        res.status(200).json({error: false, data: deleteCalendar})
    } catch (error) {
        res.json({error: error.message, data: false})
    }
}

module.exports = {
    getAllCalendar,
    getCalendarControllerID,
    postCalendarController,
    pathCalendarController,
    deleteCalendarController
}