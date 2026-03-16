const express = require('express');

const livrosRoutes =require('./routes/Livros_routes');
const app = express();
app.use(express.json());

app.use('/livros', livrosRoutes);

const PORT = 3000;

app.listen((PORT, () => {
    Console.log(`[SERVIDOR] biblioteca ondeline em https://localhost:${PORT}`);
}));
