const http = require("http")
const express = require("express")
const routerCalendar = require("./router/calendar")

const app = express()

app.use(express.json())

// para poder utilizar a api no front-end
app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self' localhost:*");
    next();
});

// Define a rota
app.use('/calendar', routerCalendar)

// roda na porta 8000 ou 3000
const port = 8000 || 3000

//Vai sempre ficar ouvindo quando houver alguma rota for acionada 
app.listen(port, () => {
    console.log('Estou ouvindo a porta ' + port)
})