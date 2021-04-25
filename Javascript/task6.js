let axios = require('axios');


async function loadData(path){
      return await new Promise(function(resolve, reject){
        axios.get(path)
            .then(response =>{
              if(path){
                 
                  resolve(response.data);
              }else{
                  reject(error);
              }
          })
      })
    
  }
  
loadData('https://api.github.com/users/ptit9x')
.then(values =>{
      console.log(values);
})
.catch(error =>console.log(error));