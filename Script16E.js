
//Javscript => Object
//property and methods

//array 

// let a=[]
// console.log(typeof a) //Object

// //String => Object
// //property and methods

// let student="mayuri"
// console.log(typeof student)//string

// let student1 ='mayuri'

// let student2=`mayuri`

// let city ="Pune"
// //  P  u  n  e
// //  0  1  2  3
// console.log(city[1])//u

// console.log(city[3])//e

// //property ==> length

// console.log(city.length)//4

// //first char
// console.log(city[0])

// //last char
// console.log(city[city.length-1])

//method()
//action
//return 

//1. toUpperCase()
//action=> to convert all char into capital case
//return=> new String

let city1="Nashik"
let y1=city1.toUpperCase()
console.log(y1)//NASHIK

//2. toLowerCase()
//action=> to convert all char into small case
//return=> new String
let city2="NaShIk"
let y2=city2.toLowerCase()
console.log(y2)

//3. includes()
//action => check wheher given char present in string or not if present the  return true else false
//return => boolean
let student="mayuri"
let y3=student.includes('M')
console.log(y3)//false

console.log(student.includes('i'))

//4. indexOf()
//action gives the index of given char if Char not found  -1
//return index(number)

let city ="Pune"
//  P  u  n  e
//  0  1  2  3
console.log(city.indexOf('p'))//-1

let y5=city.indexOf('n')
console.log(y5)//2

// let name1="shree ganesh"

// //  s   h   r   e   e       g   a   n   e   s   h
// //  0   1   2   3   4   5   6    7  8   9   10  11
//console.log(name1.length)//12

//5. startWith()

let name1="shree ganesh"

//shre=> substring

//shgane

//  s   h   r   e   e       g   a   n   e   s   h
//  0   1   2   3   4   5   6    7  8   9   10  11

console.log(name1.startsWith('s'))//true

console.log(name1.startsWith('shganesh'))//false

//6. endsWith()
console.log(name1.endsWith('sh'))//true

console.log(name1.endsWith('h'))//true

console.log(name1.endsWith('eeganesh'))//false


