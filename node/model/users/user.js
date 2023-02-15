// fs vai ser para poder ler e escrever arquivos de dados
const fs = require("fs")
const tableUser = require("./tableUser")
const bcrypt = require('bcrypt');
const saltRounds = 10; // define o número de saltos que o bcrypt deve usar para gerar o hash
const { Op } = require('sequelize');

async function getAllUsers(){
    return await tableUser.findAll()
}

async function getUsersID(id){
    return await tableUser.findOne({
        where : {
            id: id
        }
    })
}

// Vai gravar no banco de dados com a senha criptografada
async function postUsers(insertUser) {
    // Verifica se o email já existe na tabela
    const existingUser = await tableUser.findOne({
        where: {
            email: {
                [Op.eq]: insertUser.email
            }
        }
    });

    if (existingUser) {
        throw new Error('Este email já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(insertUser.password, saltRounds);
    const user = await tableUser.create({
        name: insertUser.name,
        email: insertUser.email,
        password: hashedPassword
    });
    return user;
}

// atualizar registro
async function pathUsers(updateUser, id){
    const hashedPassword = await bcrypt.hash(updateUser.password, saltRounds);
    const updatedUser = await tableUser.update(
        {
            name: updateUser.name,
            email: updateUser.email,
            password: hashedPassword
        },
        {
            where: {
                id: id
            }
        });
    return updatedUser;
}

async function deleteUser(id){
    return await tableUser.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllUsers,
    getUsersID,
    postUsers,
    pathUsers,
    deleteUser
}