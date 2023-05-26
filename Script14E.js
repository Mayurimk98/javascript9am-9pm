
//1. push()
//2. unshift()
//3. pop()
//4. shift()
//5. flat()
//6. indexOf()
//7. includes()
//8. join()
//9. map()
//10. filter()
//11. reduce()
//12. reverse()
//13. forEach()

// let student=["mayuri","vaibhav","mahesh"]
// //goodMorning mayuri

// // for(let i=0;i<student.length;i++){
// //     console.log('goodMorning '+student[i])
// // }

// student.forEach(function(el,index,array){
//     console.log("goodMorning "+el)
// })


//14. some()
// let marks=[12,54,89,32,56,90]
// let y1=marks.some(function(el,index,array){
//     return el>50
// })
// console.log(y1)


//15. every()
// let marks=[12,54,89,32,56,90]
// let y2=marks.every(function(el,index,array){
//     return el>10
// })
// console.log(y2)

//16. find()
// let age=[12,56,89,32,45,90,22]
// let s1=age.find(function(el,index,array){
//     return el>80
// })
// console.log(s1)

//17. findIndex()
// let age=[12,56,89,32,45,90,22]
// let s1=age.findIndex(function(el,index,array){
//     return el>80
// })
// console.log(s1)

//18. slice()

//        -7   -6  -5  -4  -3  -2  -1
//et age = [12, 56, 89, 32, 45, 90, 22]
//          0   1   2   3   4   5   6

//arrayName.slice(startPostion,endPostion)
//endlposition is option
//endpostion less than one
//left to right

//right to Left => []

// console.log(age.slice(2))//[89,32,45,90,22]

// console.log(age.slice(0,4))//[12,56,89,32]

// console.log(age.slice(-5,5))//[89,32,45]

// console.log(age.slice(-2,1))//[]

// console.log(age.slice(3,-4))//[]


//19. splice()

let age = [12, 56, 89, 32, 45, 90, 22]
//         0   1   2   3   4   5   6

//arrayname.splice(startposition,number of element which need to remove,replce1,replace2)

// console.log(age.splice(3, 2)) //[32,45]

// console.log(age)



console.log(age.splice(2,3,100,200,300))
console.log(age)






