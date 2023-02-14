// Teste de Crud
// Crud => Create, Read, Update, Delete


const express = require('express'); 
const app = express();


app.use(express.json());

const disci = ['Desenvolvimento de Sistemas', 'Programação Web', 'Desenvolvimento Mobile'];

// Retorna uma Disciplina

app.get('/disci/:index',(req, res)=>{
    const { index } = req.params

    return res.json(disci[index]);
});

// Retornar todas as Disciplinas
app.get('/disci', (req, res) =>{
    return res.json(disci)
})

// Criando uma nova disciplina

app.post('/disci',(req, res) => {
    const {name} = req.body;
    disci.push(name);

    return res.json(disci)
})

// Atualizar uma Disciplina

app.put('/disci/:index',(req, res) =>{
    const {index} = req.params;
    const {name} = req.body;

    disci[index] = name;
    return res.json(disci);
})

// Deletar uma Disciplina

app.delete('/disci/:index', (req, res) =>{
    const {index} = req.params;

    disci.splice(index, 1)
    return res.json({message: "A disciplina foi deletada!"})
})

app.listen(3000);