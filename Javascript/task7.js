let axios = require('axios');

function loadData(path){
    return new Promise(function(resolve, reject){
        axios.get(path).then(response =>{
            if(path){
               
                resolve(response.data);
            }else{
                reject(error);
            }
        })
    })
}

Promise.all([
    loadData('https://api.github.com/users/ptit9x'),
    loadData('https://api.github.com/users/google'),
]).then(values =>{
    console.log(values);
})