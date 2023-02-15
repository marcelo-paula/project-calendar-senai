const userModel = require("../model/users/user")

async function getAllController(req, res){
    try {
        const getAllUser = await userModel.getAllUsers()
        res.status(200).json({error: false, data: getAllUser})
    } catch (error) {
        res.status(401).json({error: error.message, data: false})
    }
}

async function getUserControllerID(req, res){
    try {
        const id = req.params.id
        const getUserControllerID = await userModel.getUsersID(id)
        res.status(200).json({error: false, data: getUserControllerID})
    } catch (error) {
        res.status(401).json({error: error.message, data: false})
    }
}

async function postUserController(req, res){
    try {
        const insertUser = req.body
        const insertUserModel = await userModel.postUsers(insertUser)
        res.status(200).json({error: false, data: insertUserModel})
    } catch (error) {
        res.status(401).json({error: error.message, data: false})
    }
}

async function pathUserController(req, res){
    try {
        const id = req.params.id
        const updateUser = req.body
        const updateModel = await userModel.pathUsers(updateUser, id)
        res.status(200).json({error: false, data: updateModel})
    } catch (error) {
        res.status(401).json({error: error.message, data: false})
    }
}

async function deleteUserController(req, res){
    try {
        const id = req.params.id
        const deleteUser = await userModel.deleteUser(id)
        res.status(200).json({error: false, data: deleteUser})
    } catch (error) {
        res.status(401).json({error: error.message, data: false})
    }
}

module.exports = {
    getAllController,
    getUserControllerID,
    postUserController,
    pathUserController,
    deleteUserController
}