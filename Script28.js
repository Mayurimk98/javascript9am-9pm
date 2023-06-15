//Map =>datatype

let car = {
    model: "Suv",
    number: 123
}
// object => keys => string

//keys ==> diff datatype ==> Map

// let a=[]
// let m1 = new Map()
// console.log(m1)

//1. set()
// m1.set("firstName",'mayuri')
// m1.set(123,'rollNumber')
// m1.set(true,'nature')

// console.log(m1)

//2. get()
// console.log(m1.get('firstName'))

// console.log(m1.get(true))

// //3. has()
// console.log(m1.has(123))
// console.log(m1.has('vaibhav'))

// //4. delete()
// console.log(m1.delete('firstName'))
// console.log(m1)

// //5. clear()
// m1.clear()
// console.log(m1)

// console.log(m1.size)//3


let m2=new Map([["firstName","mayuri"],[25,'age'],[20000,'salary']])
console.log(m2)


//key()
console.log(m2.keys())

//value()
console.log(m2.values())

//entries()
console.log(m2.entries())


//for loop for keys
for(let key of m2.keys()){
    console.log(key)
}

//for loop for values
for(let v of m2.values()){
    console.log(v)
}

//for loop for key and value
for(let [k,v] of m2.entries()){
    console.log(k,v)
}