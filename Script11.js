

//datatype
//number
//string
//boolean

//array => datatype

//let a=10,20,30

//array

let a = []
//a array

// let b = true
// console.log(typeof b) //boolean

// console.log(typeof a) //object


// let marks = [12, 45, 78, 90, 22, 33]
// //index       0   1   2   3   4   5

// console.log(marks[2]) //78
// console.log(marks[5]) //33
// console.log(marks[0])//12
// console.log(marks[7]) //undefined

//javascript ==> object   => array
//property and method

//1. property ==> length ==> return number

// let marks = [12, 45, 78, 90, 22, 33,667,89,90,56,45,56,89,67]
// //index       0   1   2   3   4   5
// //length      1   2    3  4   5   6

// console.log(marks.length) //6-1=[5]


// //first element
// console.log(marks[0])

// //last element
// console.log(marks[marks.length-1])
// //                     marks[6-1]
// //                     marks[5] //33

//====================================================================

//method()
//action
//return 

let score = [100, 99, 55, 33, 89, 23, 45]

//1. push()
//action => add element at last
//return  => new length of array

// let y1=score.push(300)
// console.log(y1)//8
// console.log(score)

//2. unshift()
//action => add element at first
//return  => new length

// let y2 = score.unshift(400)
// console.log(y2)//8
// console.log(score)


//3. pop()
//action  => remove element from last
//return => removed element

// let student=["mayuri", "ram", "sham","krishna"]
// let y3=student.pop()
// console.log(y3)//krishna


//4. shift()
//action=> remove the first element
//return => removed element

let student=["mayuri", "ram", "sham","krishna"]
let y4=student.shift()
console.log(y4)//"mayuri"
console.log(student)


//push()==> last ele add
//unshift() => add ele at first
//shift() => remove element from first
//pop() => last ele remove

//5. includes()
//action => check if element present in array or not, if found return true and if not found false
//return  => boolean

let numbersOne=[11,56,89,90,94]
let y5=numbersOne.includes(100)
console.log(y5) //false

let y6=numbersOne.includes(94)
console.log(y6)


//6. indexOf()
//action => return the index of given element if found , if not found==> -1
//return => number
let city=["pune","nashik","vardha","sangamner","nagpur", "nashik"]
//         0        1        2          3         5          6

let y7=city.indexOf('pune')
console.log(y7)

let y8=city.indexOf('Sangamner')
console.log(y8)

let y9=city.indexOf('nashik')
console.log(y9)//1


//push(), unshift(), pop(), shift(), includes(), indexof()










