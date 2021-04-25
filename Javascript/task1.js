

const objects = [
    {
      number: 45,
    },
    {
      number: 4,
    },
    {
      number: 9,
    },
    {
      number: 16,
    },
    {
      number: 25,
    },
    {
      number: 16,
    },
    {
      number: 24,
    }
  ];
//   Sử dụng .filter và .map để nhận mảng mới có số > 20 và định dạng số thành số mảng Kỳ vọng: [4, 9, 16, 16]
//   Sử dụng .reduce nhận tổng số trong mảng đối tượng

// console.log(objects);

let listArray = objects.map((object) =>{
    return object.number;
})
let result = listArray.filter(number =>{
    return number  < 20;
});

console.log("Array is: ",result);

let sum = result.reduce((sum, init)=>{
    return sum += init;   
})
console.log("reduce sum: ",sum);
  