//String

//1.toUpperCase()
//2. toLowerCase()
//3. includes()
//4. indexOf()
//5. startsWith()
//6. endsWith()
//7. slice()
//8. split()
//9. trim()
//10.trimStart()
//11. trimEnd()

//12. chatAt()

// let name1="Ganesh"

// // G    a   n   e   s   h
// // 0    1   2   3   4   5

// let u1=name1.charAt(3)
// console.log(u1)

// let u2=name1.charAt(10)
// console.log(u2) //blank string


// console.log(name1.charAt(1))

//13. charCodeAt()
// let name1="Gan esh"

// G    a   n   e   s   h
// 0    1   2   3   4   5

// let p1=name1.charCodeAt(3)
// console.log(p1)

// console.log(name1.charCodeAt(11))//NaN


// let a1
// console.log(a1)

// console.log(undefined+undefined)
// console.log(name1.charCodeAt(3))

let firstName = "shree"
// for(let i=0;i<firstName.length;i++){
//     console.log(firstName[i])
// }

for (let i = firstName.length - 1; i >= 0; i--) {
    console.log(firstName[i])
}

