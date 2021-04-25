// Thuộc tính .length trên một mảng sẽ trả về số phần tử trong mảng. Ví dụ, mảng bên dưới chứa 2 phần tử:
// [1, [2, 3]]
// // 2 phần tử, số 1 và mảng [2, 3]
// Giả sử thay vào đó chúng ta muốn biết tổng số mục không lồng nhau trong mảng lồng nhau. Trong trường hợp trên, [1, [2, 3]]
//  chứa 3 mục không lồng nhau là 1, 2 và 3.
// Viết một hàm trả về tổng số các mục không lồng nhau trong một mảng lồng nhau..
// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
// Ghi chú: Một mảng trống sẽ trả về 0.

var array = [[1, [2], 1, [2], 1]];
// console.log(array.length)

function loop(array){
    array.forEach(arr => {
        if(typeof arr === 'number'){
            count++;
            // console.log(arr);
        }
        else{
            return loop(arr);
        }
    })
}

let count = 0;

function countLength(array){
    if(array.length === 0){
        count = 0;
    }
    else{
        loop(array);
    }
    return count;
}
console.log(countLength(array));