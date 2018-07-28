const axios = require('axios');
const signale = require('signale');
    /*
        Teste register user
    */
    async function register(){
       axios.post('http://cyberlab-com.umbler.net/register', {
          username: 'mateus122',
          email: 'mateuss@hotmail.com.br',
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
          //console.log(error);
          return false;
      });
    }
    register();