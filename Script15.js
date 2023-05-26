

//Array

// let array = [19, 89, 45, 67, 32, 90]
// //           0    1   2   3  4   4

// //Splice(0,4,replace1,replace2,replace3,replace4)
// //new array of remove element

// //console.log(array.splice(1,3))//[89,45,67]

// console.log(array.splice(2,2,300,400))//[45,67]

// console.log(array)


//==============================================================

//fill()

// let numbers=[12,66,22,33,55,99,88,66]
// //           0   1  2  3  4  5  6  7

// //arrayName.fill(replaceElement,startpostion,endposition)
// //console.log(numbers.fill(100))

// //console.log(numbers.fill(500,2,7)) //


// console.log(numbers.fill("minskole",5))


//=====================================================

//at()

// let numbers=[12,66,"vaibhav",33,55,99,"mayuri",66]
// //           0   1  2  3  4  5  6  7

// console.log(numbers.at(6))

// console.log(numbers.at(2))

//====================================================

//Concat()
let a = [3, 4, 5, 6]
let b = [100, 200, 300]
let c = [500, 900]
let d = [7, 9, 0]
let e = [44, 77]

console.log(a.concat(b).concat(c).concat(d).concat(e))
// console.log(a.concat(b))

// let newarr = a.concat(b).concat(c)
// console.log(newarr)

// let a1 = newarr.push("mayuri")
// console.log(a1)//100

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
//14. some()
//15. every()
//16. find()
//17. findIndex()
//18. slice()
//19. splice()
//20. fill()
//21. at()
//22. concat()

//property==> length==> number

//fill()
let student=["ram","sham","kartik","ganesh","ravi","chinmay"]
//             0      1       2        3       4      5
//mayuri
// let s1=student.fill("mayuri")
// console.log(s1)

console.log(student.fill("mayuri",2,5))











