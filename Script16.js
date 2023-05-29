

//Javascript ==> object

//property and methods

//array => object

//string => object

// let a="mayuri"
// console.log(typeof a)

// let y1=[1,2,3]
// console.log(typeof y1)


// let y2=["mayuri","sham","ram"]
// //        0         1      2
// console.log(y2[1])

//=================================================


// let a1="mayuri"

// let a2='mayuri'

// let a3=`mayuri`

// let a4='true'

// let a5='10'

// let city="Pune"

// // P  u   n   e
// // 0  1   2   3
// // 1  2   3   4

// console.log(city)
// console.log(typeof city)
// console.log(city[2])

// console.log(city[3])

// //property => length => gives the total number of char in string

// console.log(city.length)//4

// console.log(city[city.length-1])

//methods
//action
//return 

let fruit="Apple"

//1. toUpperCase()
//action => convert all char of string into capital case
//return => new string

let a1=fruit.toUpperCase()
console.log(a1) //APPLE

let city="NASHIK"
//2. toLowerCase()
//action => to convert all char of string into small case
//return => new String

let a2=city.toLowerCase()
console.log(a2)//nashik


//3. includes()
//action => check whether given char present in string or not ==> if present return true else return false
// //return => true/false ==> boolean
// let student="shree ram"

// //  s   h   r   e   e       r   a   m
// //  0   1   2   3   4   5   6   7   8
// console.log(student.length)

// let s1=student.includes("S")
// console.log(s1)

// let s2=student.includes('a')
// console.log(s2)

//4. indexOf()
//action => return the index of given char if present else -1
//return => number

// let student="shree ram"

// //  s   h   r   e   e       r   a   m
// //  0   1   2   3   4   5   6   7   8
// let i1=student.indexOf('S')
// console.log(i1)

// let i2=student.indexOf(' ')
// console.log(i2)

// console.log(student.indexOf('e'))

//5. startsWith()

//action => check whether string starts with passing char or substring
//return => true/false ==> booelen

// let flower="jasmine"
// //jas, mine, asm=> substring
// //jme

// let f1=flower.startsWith('j')
// console.log(f1)

// let f2=flower.startsWith('min')
// console.log(f2)

// let f3=flower.startsWith('jasm')
// console.log(f3)

// let f4=flower.startsWith('jsi')
// console.log(f4)

//6. endsWith()

let institude="minskole"

let d1=institude.endsWith('le')
console.log(d1)//true

console.log(institude.endsWith('e'))

console.log(institude.endsWith('kle'))

console.log(institude.endsWith('skole'))

//string
//property => length
//methods
//1. toUppercase()
//2. toLowerCase()
//3. includes()
//4. indexOf()
//5. startsWith()
//6. endsWith()










