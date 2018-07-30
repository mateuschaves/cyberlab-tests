const axios = require('axios');
const signale = require('signale');

const token = require('../token');
const casual = require('casual');


const QTN = 10;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;


async function store(){
    axios.post('http://cyberlab-com.umbler.net/occurrence/store',{
        year: casual.year,
        month: casual.month_number,
        day: casual.day_of_month,
        time: casual.time(format = 'HH:mm:ss'),
        address: casual.address,
        number: casual.integer(from = 1, to = 200),
        neighborhood: casual.word,
        city: casual.city,
        state: casual.state
     },
          {
              'Access-Control-Allow-Origin': "*"
          }).then(function(response){
              if( response.status == 201 ){
                signale.success('Create occurrence bem sucedido !');
              }
          }).catch(function(error){
              signale.error('Create occurrence falhou ! - ' + error.response.data.message + ' ' + error.message);
    });
}
    

for(var i = 0; i < QTN; i++){
    store()
}
