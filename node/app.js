const http = require("http")
const express = require("express")
const routerCalendar = require("./router/calendar")
const cors = require("cors")

const app = express()

app.use(express.json())

// aceita todos os tipos
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*'
}));

// para poder utilizar a api no front-end
app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self' localhost:*");
    next();
});

//valida o banco de dados
(async () => {
    const dataBase = require("./bd/db")
    const Calendar = require("./model/tableCalendar")

    try {
        const result = await dataBase.sync()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
})

// Define a rota
app.use('/calendar', routerCalendar)

// roda na porta 8000 ou 3000
const port = 8000 || 3000

//Vai sempre ficar ouvindo quando houver alguma rota for acionada 
app.listen(port, () => {
    console.log('Estou ouvindo a porta ' + port)
})