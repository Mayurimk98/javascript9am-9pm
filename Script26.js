//datatype
//Map

let a = 10

let b = ""

let c = []

let d = {}

//javascript object

// let student = {
//     firstName: "mayuri",
//     true: 25,
//     100: true,
//     skill: ["js", "py", "cy"]
// }

// for(let key in student){
//     console.log(typeof(key))
// }


//MAP

let myMap = new Map()
console.log(myMap)

//1.set()

myMap.set(25,"age")
myMap.set('fname',"mayuri")
myMap.set(true,2000)

console.log(myMap)

//size
console.log(myMap.size) //3

// //2. has()  ==> boolean
// console.log(myMap.has(200))

// //3. delete() ==> boolean

// console.log(myMap.delete(true))

// console.log(myMap)

// //4. clear()

// myMap.clear()
// console.log(myMap)

//5. get() => 
console.log(myMap.get('fname'))





