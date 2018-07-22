const axios = require('axios');
const signale = require('signale');

const TOKEN  = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzMjIyOTM0M30.oiuiH00UjRNvewHIhH3lWEKLYf1mdqe6-DVDw-GFBrA'
axios.defaults.headers.common['Authorization'] = TOKEN;

    /*
                Teste show user
    */
    async show(){

      await axios.get('localhost:3333/logs/types/store',{
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
      });

    }

    /*
                Teste Delete user
    */
   async delete(){

   await axios.delete('http://localhost:3333/users/2/delete',{
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
