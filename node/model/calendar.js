// fs vai ser para poder ler e escrever arquivos de dados
const fs = require("fs")
const Holidays = require('date-holidays');

// Listar todos
function getAllCalendar(){
    return JSON.parse(fs.readFileSync("dados.json"))
}

// Listar somente o ID resejado
function getCalendarID(id){
    const dados = JSON.parse(fs.readFileSync("dados.json"))
    return dados.filter(dado => dado.id === id)[0] 
}

// Vai inserir um registro
function postCalendar(year){
    try {
        const hd = new Holidays('BR', 'SP'); // cria um objeto Holidays para o estado de São Paulo
        const allDados = JSON.parse(fs.readFileSync('dados.json')); //listar todos os dados que já existem
        const dados = [...allDados];
    
        for (let month = 0; month < 12; month++) {
          const daysInMonth = new Date(year, month + 1, 0).getDate(); // determina quantos dias tem o mês
          for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isHoliday = hd.isHoliday(date);
            const status = isHoliday ? 'F' : 'L';
    
            const yearString = year.toString();
            const monthString = (month + 1).toString().padStart(2, '0');
            const dayString = day.toString().padStart(2, '0');
            const dateString = yearString + monthString + dayString + status;
    
            const data = { dateString };
            dados.push(data);
          }
        }
    
        fs.writeFileSync('dados.json', JSON.stringify(dados));
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