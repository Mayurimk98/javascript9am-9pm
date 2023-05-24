
//Array

//1. push()
//2. unshift()
//3. shift()
//4. pop()
//5. indexOf()
//6. includes()
//7. flat()
//8. join()
//9. reverse()

//let marks = [23, 73, 89, 34, 78, 90, 12]

//[33, 83]

// let plus10 = []
// for (let i = 0; i <= marks.length - 1; i++) {
//     //console.log(marks[i]+10)
//     plus10.push(marks[i] + 10)
// }
// console.log(plus10)


//10. map()
//action => perform the operation with each ele of array
//return => new array

//callback function
// let result = marks.map(function (element, index, array) {
//     return element + 10

// })
// console.log(result)



// function mul(){
//     console.log(2*2)
// }
// mul()


//Problem 2

let marks = [23, 73, 89, 25, 32, 30, 28, 34, 78, 90, 12]

// let names=["mayuri","ram","sham","vaibhav"]

// //[73,89,32,34,78,90]

// let greater30 = []

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 30) {
//         //console.log(marks[i])
//         greater30.push(marks[i])
//     }
// }
// console.log(greater30)

//11. filter()
//action => filterout the array elements based on condition
//return  => new array

// let greater30=marks.filter(function(el,index,arr){
//     return el>30
// })
// console.log(greater30)


// let names = ["mayuri", "ram", "sham", "vaibhav", "sathish", 'anu']
// //[mayuri,vaibhav,sathish]

// let a = "mayuri"
// console.log(a.length)

// let result = names.filter(function (el, inx, arr) {
//     return el.length > 4
// })
// console.log(result)


//map() => 
//filter()

let scores = [4, 5, 6, 7, 10]
//addition 32

// let sum = 0//4 //9//15//22 //32
// for (let i = 0; i < scores.length; i++) {
//     sum = sum + scores[i]
// //   4   =   0+ 4
// //   9   =   4+  5
// //   15   =    9+6
// //    22   =     15+7
// //      32    =  22+10

// }
// console.log(sum)

//reduce()

let sum = scores.reduce(function (accumulator, element, index, array) {
    return accumulator + element
}, 0)
console.log(sum)


let age = [12, 34, 40]

//94
let y1 = age.reduce(function (acc, ele, inx, arr) {
    return acc + ele
},0)
console.log(y1)












