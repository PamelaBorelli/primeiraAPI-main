import fetch from 'node-fetch';


fetch('https://viacep.com.br/ws/14410013/json/')

.then (response => response.json())
.then (json => console.table(json))
.catch (err => console.log('Erro de solicitação', err));