//chamar a biblioteca express
const express = require('express');

//armazenar na váriavel server a biblioteca express()
const server = express();

//Existe uma necessidade de usar o express json para funcionar
server.use(express.json())

const nomes = ['Clark', 'Lois', 'Bruce', 'Harley', 'Jason', 'Hal'];

//#region Desafio 
// Aquisição do array e amostragem de cada nome dado seu index
server.get('/desafio/:index', (req, res) => {
  const { index } = req.params;

  return res.send( `<!DOCTYPE html>
  <html>
    <body style="text-align: center">
  
      <h1 >Desafio!</h1>
      <h1> Bem vindo <b style="color:red">${nomes[index]}</b></h1> 
      <p>Você acabou de fazer uma interação Backend com Frontend. Parabéns! </p>
    </body>
  </html> `);
})

//#endregion


//Retornar todos os nomes
server.get("/nomes", (req, res) => {

  return res.json(nomes)

});

//Retornar um único nome
server.get("/nomes/:index", (req, res) => {
  const { index } = req.params;
  return res.json(nomes[index]);
});

//Criar um novo nome
server.post("/nomes",(req, res) => {
  const { name } = req.body ;
  nomes.push(name);

  return res.json(nomes)
});

//Alterando um nome
server.put("/nomes/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  nomes[index] = name;

  return res.json(nomes);
});

//Excluido algum nome
server.delete("/nomes/:index", (req, res) => {
  const { index } = req.params;

  nomes.splice(index, 1);
  return res.json(nomes);
});



//chamar a função listen para "escutar a porta em que vamos utilizar"
server.listen(3000);