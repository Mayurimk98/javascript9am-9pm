
//String
//1. toUpperCase()
//2. toLowerCase()
//3. includes()
//4. indexOf()
//5. startSWith()
//6. endsWith()

//length

// let flower =" jasmine "

// //    j   a   s   m   i   n   e
// //0   1   2   3   4   5   6    7   8

// console.log(flower[3])
// console.log(flower.length)

// //7. trim()
// //action => remove all spaces from start and end
// //return => new string
// let d1=flower.trim()
// console.log(d1)
// console.log(d1.length)


// //8. trimStart()
// //action => remove all space from start
// //return => new string

// let flower =" jasmine "

// //    j   a   s   m   i   n   e
// //0   1   2   3   4   5   6    7   8
// console.log(flower.length)//9
// let d2=flower.trimStart()
// console.log(d2)
// console.log(d2.length)//8

//9. trimEnd()
//action => remove all space from last
//return => new string

// let flower =" jasmine   "

// //    j   a   s   m   i   n   e
// //0   1   2   3   4   5   6    7   8  9 10
// console.log(flower.length)//11
// let d3=flower.trimEnd()
// console.log(d3)
// console.log(d3.length)//8


//10. slice()

let firstName="Shree Ganesha"

//-13  -12 -11 -10 -9  -8  -7  -6  -5  -4  -3  -2   -1
// S    h   r   e   e       G   a   n   e   s   h   a
// 0    1   2   3   4   5   6   7   8   9   10  11  12

//firstName.slice('startposition','endposition')
//endposition => optional
//endposition less than 1
//left to right
//right to left => blank string

let y1=firstName.slice(3,10)
console.log(y1)

console.log(firstName.slice(-2,-12))

console.log(firstName.slice(-10))

console.log(firstName.slice(0,5))

console.log(firstName.slice(-9,4))

console.log(firstName.slice(6,-3))


//join() => array => string
//11. split() ==> string => array

let student="mayuriK"
let u1=student.split('a')
console.log(u1)

let num='123$rs$890'
let u2=num.split('$') //[123,rs,890]
console.log(u2)

let name1='Raja mohan Raut'
let u3=name1.split(" ")
console.log(u3)
u3.push("mayuri")


let fName="Mayuri"
// fName.toUpperCase().toLowerCase().indexOf('i')

console.log(fName.toLowerCase().split('a').reverse().join("=").startsWith('y'))

