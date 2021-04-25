// Viết một định dạng hàm Tiền (số tiền) để định dạng tiền tệ
// Examples:
// -1 => "0"
// 0 => "0"
// 10 => "10"
// 1000 => "1,000" 
// 10000 => "10,000"
// 1000000 => "1,000,000"

// let money = 1000000;
// let arr = money.toString().split('');
// arr.splice(1,0,",");
// arr.splice(5,0,",");
// console.log(arr.join(''))

function comma(arr,length,init){
    for(let i=1;i<=length;i++){
        arr.splice(init,0,",");
        init =  4 + init;
    }
    return arr;
}
function Money(money){
    let result = null;
    if(money <= 0){
        result = 0;
    }
    else if(money < 1000){
        result = money;
    }
    else{
        let arr = money.toString().split('');
        let numOfMoney = arr.length;
        let length = Math.floor(numOfMoney / 3);
        let init = numOfMoney % 3;
        let listNum = comma(arr,length,init);
        if(init === 0){
            listNum.shift();
            result = listNum.join('');
        }
        else{
            result = listNum.join('');
        }
    }
    return result;
}

console.log("money is: ",Money(1000000));


