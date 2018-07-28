const axios = require('axios');
const signale = require('signale');

const token = require('../token');
const casual = require('casual');

const QTN = 100;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    /*
                Teste delete typecontroller
    */
  for(var i = 0; i < QTN; i++){
    const id = casual.integer(from = 1, to = 235)
    axios.delete('http://cyberlab-com.umbler.net/logs/types/'+ id +'/delete',{
        'Access-Control-Allow-Origin': "*"
    }).then(function(response){
        if(response.status == 200 && response.data.message){
            signale.success('Delete logtype bem sucedido !');
        }else{
            signale.error('Delete logtype falhou !');
        }
    }).catch(function(error){
        signale.error('Delete logtype falhou ! - ' +  error.response.data.message + ' '  + error.message);
    });
  }
