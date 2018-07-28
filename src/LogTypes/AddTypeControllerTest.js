const axios = require('axios');
const signale = require('signale');

const token = require('../token');
const casual = require('casual');


const QTN = 100;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    /*
                Teste store typecontroller
    */
      function store(t) {
       axios.post('http://cyberlab-com.umbler.net/logs/types/store',{
         slug: casual.word,
         name: casual.word,
         description: casual.sentence
      },
      {
          'Access-Control-Allow-Origin': "*"
      }).then(async function(response){
          if(response.status == 201 && response.data.slug && response.data.name && response.data.description && response.data.id){
            signale.success('['+i+'] Store logtype ben sucedido !');
          }
      }).catch(function(error){
          signale.error('['+i+'] Store logtype falhou ! - ' + error.response.data.message + ' ' + error.message);
      });
    } 
    for(var i = 0; i < QTN; i++){
        store(i);
    }
    