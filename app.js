const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const alimentos = [
  { id: 1, nome: 'Arroz', preco: 5.00 },
  { id: 2, nome: 'Feijão', preco: 4.50 },
  { id: 3, nome: 'Macarrão', preco: 2.80 },
  { id: 4, nome: 'Açúcar', preco: 3.00 },
  { id: 5, nome: 'Sal', preco: 1.20 },
  { id: 6, nome: 'Óleo', preco: 6.50 },
  { id: 7, nome: 'Café', preco: 7.00 },
  { id: 8, nome: 'Leite', preco: 3.50 },
  { id: 9, nome: 'Farinha', preco: 2.20 },
  { id: 10, nome: 'Biscoito', preco: 1.80 }
];

app.get('/api/alimentos', (req, res) => {
  res.json(alimentos);
});

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
