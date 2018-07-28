const axios = require('axios');
const signale = require('signale'); 
    /*
        Teste auth user
    */
   async function auth(){
    axios.post('http://cyberlab-com.umbler.net/auth', {
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
 auth();
