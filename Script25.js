

// let a=''
// let a1=100
// let a2=[]
// let a3=false
// let a4={}

//MAP

// let student = {
//     firstName: "Mayuri",
//     true: "Katwe",
//     200: 25,
//     111: ["JS", "PY", "CY"],
//     isStuding: false
// }

// for(let key in student){
//     console.log(typeof key)
// }

//keys and value
let y1 = new Map()
console.log(y1)

//to add element in map 
//1. set()

y1.set('firstName',"mayuri")
console.log(y1)

y1.set(1,'age')
console.log(y1)

y1.set(true,'isstuding')
console.log(y1)

//size
console.log(y1.size)

//2. has() => boolean
let u1=y1.has(true)
console.log(u1)

let u2=y1.has(300)
console.log(u2)

let u3=y1.has(1)
console.log(u3)

//3. delete() => boolean
let s1=y1.delete(300)
console.log(s1)
console.log(y1)

let s2=y1.delete('firstName')
console.log(s2)
console.log(y1)

//5.clear() => nothing to be return
y1.clear()
console.log(y1)
