const axios = require('axios');
const signale = require('signale');

const token = require('../token');
const casual = require('casual');

const QTN = 1;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    /*
                Teste Delete user
    */
    for(var i = 0; i < QTN; i++){
        const id = casual.integer(from = 2, to = 2)
        axios.delete('http://cyberlab-com.umbler.net/users/'+id+'/delete',{
            'Access-Control-Allow-Origin': "*"
        }).then(function(response){
            if(response.status == 200 && response.data.message){
                signale.success('Delete user bem sucedido !');
            }else{
                signale.error('Delete user falhou !');
            }
        }).catch(function(error){
            signale.error('Delete user falhou ! - ' + error.message);
        });
    }
