
//1. push()
//2. unshift()
//3. pop()
//4. shift()
//5. indexOf()
//6. includes()
//7. flat()
//8. join()
//9. reverse()
//10. map()
//11. filter()
//12. reduce()
//13. forEach()


// let student=["mayuri","ganesh","shiva"]
// //welcome mayuri
// //welcome ganesh
// //welcome shiva

// // for(let i=0;i<=student.length-1;i++){
// //     console.log('welcome '+student[i])
// // }


// student.forEach(function(el,index,arr){
//     console.log('welcome '+el)
// })



//sum
//14.Some() 

//return boolean
// let marks=[12,34,25,78,90,15]
// //<15
// let result=marks.some(function(el,index,arr){
//     return el<5
// })
// console.log(result)

//15. every()

// let marks = [12, 34, 25, 78, 90, 15]
// let result = marks.every(function (el, index, array) {
//     return el > 10
// })
// console.log(result)

//16. find()

// let marks = [12, 19, 25, 78, 90, 15]
// //            0   1   2   3   4   5

// let res = marks.find(function (el, index, array) {
//     return el > 15
// })
// console.log(res)

//17. findIndex()
// let marks = [12, 19, 25, 78, 90, 15]
// //            0   1   2   3   4   5

// let resu1=marks.findIndex(function(el,index,arr){
//     return el>25
// })
// console.log(resu1)


//18. slice()

// //           -8   -7  -6  -5  -4  -3  -2  -1
// let scores = [12, 45, 89, 23, 44, 99, 34, 90]
// //            0    1   2   3   4   5   6  7

//arrayName.slice(startPosition,endPosition)
//endposition is always less than one
//endposition option
//left right
//right to left ==> blank array

// let a1=scores.slice(2,7)  //[89,23,44,99,34]
// console.log(a1)
// console.log(scores.slice(4,1))//[]
// console.log(scores.slice(-7,5))//[45,89,23,44]
// console.log(scores.slice(-3,-8))//[]

// console.log(scores.slice(6,-7))//[]
// console.log(scores.slice(3))
// console.log(scores.slice(-5))

// console.log(scores.slice(-6,6))

// console.log(scores.slice(-5,3))//[]

// //some(), every(), find(), findIndex(), slice()


//19. splice()
//           -8   -7  -6  -5  -4  -3  -2  -1
let scores = [12, 45, 89, 23, 44, 99, 34, 90]
//            0    1   2   3   4   5   6  7

//arrayName.splice(startpostion, how many element to be remove,elementone,element 2)

// console.log(scores.splice(3,2))
// console.log(scores)

console.log(scores.splice(3,2, 200,300))
console.log(scores)







