// Tạo một hàm nhận một mảng số và trả về "Boom!" nếu số 7 xuất hiện trong mảng. Nếu không, trả về "không có số 7 nào trong mảng".
// Examples:
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

let arr = [1, 2, 3, 4, 5,9, 677];

function sevenBoom(arr){
    let Boom =  "there is no 7 in the array"
    for(let i = 0; i < arr.length; i++){
        let ListNum = arr[i].toString().split('');
        let isSeven = ListNum.find(num => {
            return num === '7';
        })
        if(isSeven !== undefined){
            Boom = 'Boom!'
            break;
        }
    }
    return Boom;
}

console.log(sevenBoom(arr));
// sevenBoom(arr)
