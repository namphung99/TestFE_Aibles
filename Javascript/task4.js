// Cho một chuỗi đầu vào, hãy đảo ngược chuỗi từng từ một, từ đầu tiên sẽ là từ cuối cùng, v.v.
// Examples:
// reverseWords(" the sky is blue") ➞ "blue is sky the"
// reverseWords("hello   world!  ") ➞ "world! hello"
// reverseWords("a good example") ➞ "example good a"
// Notes
// Một từ được định nghĩa là một chuỗi các ký tự không phải khoảng trắng.
// Chuỗi đầu vào có thể chứa các khoảng trắng ở đầu hoặc cuối. Tuy nhiên, chuỗi đã đảo ngược của bạn không được chứa khoảng trắng ở đầu hoặc cuối.
// Bạn cần giảm nhiều khoảng trắng giữa hai từ thành một khoảng trắng trong chuỗi đảo ngược.

// let str = " the sky   is blue";

// let arr = str.trim().split(' ');
// console.log(arr);


function reverseWords(str){
    let arr = str.trim().split(' ');
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !==''){
            newArray.push(arr[i]);
        }
    }
    // newArray.reverse();
    let result = newArray.reverse().join(' ');
    return result;
}



console.log(reverseWords("hello   world!  "))