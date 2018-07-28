const axios = require('axios');
const signale = require('signale');
const casual = require('casual');

const QTN = 200;
    /*
        Teste register user
    */
    for(var i = 0; i < QTN; i++){
        axios.post('http://cyberlab-com.umbler.net/register', {
            username: casual.username,
            email: casual.email,
            password: casual.password
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
    