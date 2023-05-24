

//Problem 1

let birthyear = [1998, 2001, 1989, 2003]
// age=[25, 21, 33, 22]

//currentyear -birthyear=age

// let agee=[]
// for (let i = 0; i < birthyear.length; i++) {
//    let age= 2023 - birthyear[i]
//    agee.push(age)
// }
// console.log(agee)

//map()
//action => perform operation with each element of array
//return =>new array

// let age = birthyear.map(function (element, index, array) {
//     return 2023 - element
// })
// console.log(age)


// let marks=[20,34,78,11,90]

// let add10=marks.map(function(el,index,arr){
//     return el+10
// })
// console.log(add10)


//Problem 2

let scores = [23, 11, 45, 24, 12, 67, 90]
//>25 

// let greter25=[]
// for(let i=0;i<scores.length;i++){
//     //console.log(scores[i])
//     if(scores[i]>25){
//         //console.log(scores[i])
//         greter25.push(scores[i])
//     }
// }
// console.log(greter25)

//filter()
//action filter the element based on condition
//return new array
// let y1 = scores.filter(function (el, index, array) {
//     return el > 25
// })
// console.log(y1)


//problem 3

let num = [10, 20, 5, 2]
//37

// let sum = 0 //10 //30 //35 //37
// for (let i = 0; i < num.length; i++) {
//     //console.log(i)//index
//     //console.log(num[i])//element
//     sum = sum + num[i]
//     // 10=    0 + 10
//     // 30=    10+ 20 
//     // 35=    30+ 5
//     //  37=   35+ 2

// }
// console.log(sum)

//reduce()

let result = num.reduce(function (accumulator, element, index, array) {
    return accumulator + element
}, 0)
console.log(result)

//map()
//filter()
//reduce()

//====================================================

let student=["mayuri","sathish","jaya","vignesh"]
// welcome mayuri
// welcome sathish

// for(let i=0;i<student.length;i++){
//     console.log('welcome ' + student[i])
// }


//forEach()
//action => perform action with each element
//return => ntg

student.forEach(function(el,index,array){
    console.log('welcome '+ el)
})












