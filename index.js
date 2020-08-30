import express from 'express';

const app = express();
app.use(express.json());

const recipes = [
    {
        nome: 'Filé de frango',
        receita: 'TANANANA',
    },
    {
        nome: 'Peixe',
        receita: 'TENENENENE'
    }
];

app.get('/recipes', (request, response) => {
    return response.json(recipes);
});

app.post('/recipes', (request, response) => {
    const nome = request.body.nome;
    const receita = request.body.receita;

    const recipe = {nome, receita};

    recipes.push(recipe);

    return response.json(recipe);
});

app.get('/recipes/:id', (request, response) => {
    const id = request.params.id;
    return response.json(recipes[id]);
});

app.delete('/recipes/:id', (request, response) => {
    const id = request.params.id;
    recipes.splice(id, 1);
    return response.json();
});

app.put('/recipes/:id', (request, response) => {
    const id = request.params.id;
    const nome = request.body.nome;
    const receita = request.body.receita;

    const recipe = {nome, receita}
    recipes[id] = recipe;
    return response.json(recipe);
});

app.listen(3000, () => {
    console.log('Sistema rodando na porta 3000');
});

