const userModel = require("../model/users/user")

async function getAllController(req, res){
    try {
        const getAllUser = await userModel.getAllUsers()
        res.send(getAllUser)
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

async function getUserControllerID(req, res){
    try {
        const id = req.params.id
        const getUserControllerID = await userModel.getUsersID(id)
        res.send(getUserControllerID)
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

async function postUserController(req, res){
    try {
        const insertUser = req.body
        await userModel.postUsers(insertUser)
        res.status(200).send("Arquivo inserido com sucesso!")
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

async function pathUserController(req, res){
    try {
        const id = req.params.id
        const updateUser = req.body
        await userModel.pathUsers(updateUser, id)
        res.status(200).send("Arquivo atualizado com sucesso!")
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

async function deleteUserController(req, res){
    try {
        const id = req.params.id
        await userModel.deleteUser(id)
        res.status(200).send("Arquivo excluido com sucesso!")
    } catch (error) {
        res.status(401)
        res.send(error.message)
    }
}

module.exports = {
    getAllController,
    getUserControllerID,
    postUserController,
    pathUserController,
    deleteUserController
}