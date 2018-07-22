const axios = require('axios');
const signale = require('signale');

    /*
        TESTE DE REGISTRO DE USUÁRIO
    */
    async function register(){
       axios.post('http://localhost:3333/register', {
          username: 'mateus12',
          email: 'mateus@hotmail.com.br',
          password: '1234'
      },
      {
          'Access-Control-Allow-Origin': "*"
      }).then(async function(response){
          console.log(response.status);
          if(response.status == 201){
              await signale.success('Registro bem sucedido !');
              return true;
          }else{
              signale.error('Registro falhou !');
              return false;
          }
      }).catch(function(error){
          signale.error('Registro falhou ! - ' + error.message);
          return false;
      });
    }

    /*
        TESTE DE AUTENTICAÇÃO DE USUÁRIO
    */
    async function auth(){
       axios.post('http://localhost:3333/auth', {
          email: 'mateus@hotmail.com.br',
          password: '1234'
      },
      {
      'Access-Control-Allow-Origin': "*"
      }).then( function (response) {
          if(response.status == 200 && response.data.token && response.data.type){
              signale.success('Autenticação bem sucedida !');
              console.log('Token de acesso: ' + response.data.token);
              return true;
          }else{
              signale.error('Autenticação falhou !');
              return false;
          }
      }).catch(function (error) {
          signale.error('Autenticação falhou - ' + error.message);
          return false;
      });
    }

register();
auth();
