// fs vai ser para poder ler e escrever arquivos de dados
const fs = require("fs")
const Holidays = require('date-holidays');
const tableCalendar = require("./tableCalendar")

// Listar todos
async function getAllCalendar(year){
    return await tableCalendar.findAll({
        where : {
            year: year
        }
    })
}

// Listar somente o ID resejado
function getCalendarID(id){
    const dados = JSON.parse(fs.readFileSync("dados.json"))
    return dados.filter(dado => dado.id === id)[0] 
}

async function processa(year){
    return new Promise((aceito, recuso) => {
        const hd = new Holidays('BR', 'SP'); // cria um objeto Holidays para o estado de São Paulo
        const dados = [];

        for (let month = 0; month < 12; month++) {
            const daysInMonth = new Date(year, month + 1, 0).getDate(); // determina quantos dias tem o mês
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month, day);
                const isHoliday = hd.isHoliday(date);
                const status = isHoliday ? 'F' : 'L';
        
                const yearString = year.toString();
                const monthString = (month + 1).toString().padStart(2, '0');
                const dayString = day.toString().padStart(2, '0');
                const dateString = yearString + monthString + dayString;
        
                const data = { date: dateString,  status: status, year: yearString };
                dados.push(data);
            }
        }

        aceito(dados)
    })
}

// Vai inserir um registro
async function postCalendar(year){
    try {    
        processa(year).then(dados => {
            return JSON.stringify(dados)
        }).then(json => {
            const newCalendar = tableCalendar.create({
                year: year,
                description: json
            })
        })

    } catch (error) {
        console.error(error);
    }
}

// Atualizar um registro
function pathCalendar(id){

}

// Deleta um registro
function deleteCalendar(id){

}

module.exports = {
    getAllCalendar,
    getCalendarID,
    postCalendar,
    pathCalendar,
    deleteCalendar
}