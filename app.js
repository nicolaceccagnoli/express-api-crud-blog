// Importo Express
const express = require('express');

// Invoco Express
const app = express();
const port = 3000;

// Invoco il controller
const postsRouter = require("./routers/posts.js");
// Importo il middleware per le richieste HTTP
const routersLogger = require('./middleware/routersLogger.js');
// Importo il middleware per la gestione degli errori
const errorsFormatter = require('./middleware/errorsFormatter.js');
// Importo il middleware la gestione della rotta non trovata
const routesNotFound = require('./middleware/routesNotFound.js');

// Middleware per i file statici
app.use(express.static('./public'));

// Utilizzo il middleware per le richieste HTTP
app.use(routersLogger);

// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Definisco le mie rotte
app.use('/posts', postsRouter);

// Utilizzo il middleware per le rotte non trovate
app.use(routesNotFound);

// Utilizzo il middleware per la gestione degli errori
app.use(errorsFormatter);

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});