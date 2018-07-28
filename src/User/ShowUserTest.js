const axios = require('axios');
const signale = require('signale');

const token = require('../token');
const casual = require('casual');

const QTN = 100;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    /*
                Teste show user
    */
   for(var i = 0; i < QTN; i++){
        const id = casual.integer(from = 1, to = 3);
        axios.get('http://cyberlab-com.umbler.net/users/' + id,{
            'Access-Control-Allow-Origin': "*"
        }).then(function(response){
            const data = response.data.user[0];
            if(response.status == 200){
                signale.success('Show user '+id+' bem sucedido !');
            }else{
                signale.error('Show user falhou ! !')
            }
        }).catch(function(error){
            signale.error('Show user falhou ! - ' + error.message);
        });
   }