const express = require('express');

const livrosRoutes = require('./src/routes/livros_routes');
const app = express();
app.use(express.json());

app.use('/livros', livrosRoutes);

const PORT = 3000;

app.listen((PORT), () => {
    console.log(`[SERVIDOR] biblioteca ondeline em http://localhost:${PORT}`);
});
