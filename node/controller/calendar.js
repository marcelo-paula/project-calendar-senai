const calendarModel = require("../model/calendar")

// Listar todos
async function getAllCalendar(req, res){
    try {
        const year = req.params.year
        const getAllCalendar = await calendarModel.getAllCalendar(year)
        res.send(getAllCalendar)
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

// Listar por ID
function getCalendarControllerID(req, res){
    try {
        const id = req.params.id
        const getCalendarControllerID = calendarModel.getCalendarID(id)
        res.send(getCalendarControllerID)
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

// Inserir um registro
async function postCalendarController(req, res){
    try {
        const year = req.params.year
        await calendarModel.postCalendar(year)
        res.status(200).send("Arquivo inserido com sucesso!")
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

// Atualizar um registro
async function pathCalendarController(req, res){
    try {
        const id = req.params.id
        await calendarModel.pathCalendar(id)
        res.status(200).send("Arquivo atualizado com sucesso!")
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

// Deletar um registro
async function deleteCalendarController(req, res){
    try {
        const id = req.params.id
        await calendarModel.deleteCalendar(id)
        res.status(200).send("Arquivo excluido com sucesso!")
    } catch (error) {
        res.status(401).send(error.message)
    }
}

module.exports = {
    getAllCalendar,
    getCalendarControllerID,
    postCalendarController,
    pathCalendarController,
    deleteCalendarController
}