const axios = require('axios');
const signale = require('signale');


const TOKEN  = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzMjEyMzQzMX0.XTeP5abpQspc60_6D-cF7Pt5zFVBWbehA0iXqccDkS4'
axios.defaults.headers.common['Authorization'] = TOKEN;

    async function test(){

    /*
                Teste show user
    */
    await axios.get('http://localhost:3333/users/1',{
        'Access-Control-Allow-Origin': "*"
    }).then(function(response){
        const data = response.data.user[0];
        if(response.status == 200 && data.username == 'mateus12' && data.email == 'mateus@hotmail.com.br'){
            signale.success('Show user bem sucedido !');
        }else{
            signale.error('Show user falhou ! !')
        }
    }).catch(function(error){
        signale.error('Show user falhou ! - ' + error.message);
    })
}

test();