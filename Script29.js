
//Map==> datatype

//Set  => datatype
//set => unique value store

let mySet = new Set()
console.log(mySet)

//1. add()
let y1 = mySet.add("mayuri")
console.log(y1)

console.log(mySet)

mySet.add("Vaibhav")

mySet.add("Ganesh")

console.log(mySet)

let newSet = new Set(["Mayuri", "Vaibhav", "krushna", "Ram"])
console.log(newSet)

//Size  => property

console.log(newSet.size)
console.log(mySet.size)

let y9 = new Set("mayuri")
console.log(y9.size)

let y10 = new Set("Shree Ganesh")
console.log(y10.size) //Shre Gans

let arr = [12, 34, 22, 12, 78, 90, 34, 90]
//[12,34,22,78,90]

let s1=new Set(arr)
console.log(s1)

console.log(s1.size)

//2. has()
let a11=new Set([1,2,3])
let o1=a11.has(3)
console.log(o1)

let o2=a11.has(90)
console.log(o2)

//3. delete()
let setA=new Set([11,33,66,99,12])
// let w1=setA.delete(66)
// console.log(w1)
// console.log(setA)

let w2=setA.delete(5)
console.log(w2)
console.log(setA)

//4. clear()
setA.clear()
console.log(setA)


//add()
//has()
//delete()
//clear()

//size => property






