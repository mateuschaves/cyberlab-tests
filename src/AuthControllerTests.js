const axios = require('axios');
const signale = require('signale');


async function test(){

/*
        TESTE DE REGISTRO DE USUÁRIO
*/
await axios.post('http://localhost:3333/register', {
    username: 'mateus12',
    email: 'mateus@hotmail.com.br',
    password: '1234'
},
{
    'Access-Control-Allow-Origin': "*"
}).then(function(response){
    if(response.status == 201){
        signale.success('Registro bem sucedido !');
    }else{
        signale.error('Registro falhou !')
    }
}).catch(function(error){
    signale.error('Registro falhou ! - ' + error.message);
})



/*
        TESTE DE AUTENTICAÇÃO DE USUÁRIO
*/
await axios.post('http://localhost:3333/auth', {
    email: 'mateus@hotmail.com.br',
    password: '1234'
},
{
   'Access-Control-Allow-Origin': "*"
}).then(function (response) {
    if(response.status == 200 && response.data.token && response.data.type){
        signale.success('Autenticação bem sucedida !');
    }else{
        signale.error('Autenticação falhou !');
    }
}).catch(function (error) {
    signale.error('Autenticação falhou - ' + error.message);
});
}


test();