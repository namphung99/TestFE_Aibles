// Create a function which returns how many Friday 13ths there are in a given year.
// Examples
// howUnlucky(2020) ➞ 2
// howUnlucky(2026) ➞ 3
// howUnlucky(2016) ➞ 1

// let day = new Date(2021,3,25);

// console.log(day.getDay())



function howUnlucky(year) {
    let count = 0;
    for (let month=0; month<12; month++) {
        let day = new Date(year,month,13);
        if(day.getDay() == 5){
          count++;
       }
    }
    return count;                            
}

console.log(howUnlucky(2026));
