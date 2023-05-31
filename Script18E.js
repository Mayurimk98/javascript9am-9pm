
// // //string

// // let firstName="MayUri"
// // // m   a   y   u   r   i
// // // 0   1   2   3   4   5

// // //1. toUpperCase()
// // // console.log(firstName.toUpperCase())

// // // let a1=firstName.toUpperCase()
// // // console.log(a1)

// // //2. toLowerCase()
// // //console.log(firstName.toLowerCase())

// // //3. indexOf()
// // //console.log(firstName.indexOf('m'))//-1

// // //4. includes()
// // //console.log(firstName.includes('y'))//true

// // //5. startWith()
// // firstName.startsWith('M')//true
// // firstName.startsWith('May')//true

// // //6. endsWith()
// // console.log(firstName.endsWith('uri'))//false

// // //7. trim()
// //action => to remove space from start and end
// //return => string

// let student=" mayuri "
// console.log(student.length)//8
// // let s1=student.trim()//mayuri
// // console.log(s1)
// // console.log(s1.length)//6


// //8. trimStart()
// student.trimStart() //mayuri 

// //9.trimEnd()
// student.trimEnd() //  mayuri

// //10. slice()

// let firstName="MayUri"
// // -6  -5  -4  -3 -2   -1
// // m   a   y   u   r   i
// // 0   1   2   3   4   5

// //slice(startposition,endposition)
// // endpostion => option
// //endposition less than 1(1,4)
// //left to right
// //right to left ==> blank string


// console.log(firstName.slice(-2,1))//""
// console.log(firstName.slice(0))//mayuri

// console.log(firstName.slice(-2,4)) //""

// console.log(firstName.slice(2,5))//"yur"

// //12. split()

// //array ==> join() => string
// //string => split()=> array
// let institude="minskole"
// let y1=institude.split('n')
// console.log(y1)

// let x1='100$200'
// let y2=x1.split('$')
// console.log(y2) //[100, 200]
// console.log(y2[0])

// //13. charAt()

// let firstName="MayuriK"
// // M   a   y   u   r   i  K
// // 0   1   2   3   4   5  6

// console.log(firstName.charAt(3)) //u
// console.log(firstName.charAt(10))

//14. charCodeAt()
// let firstName="MayuriK"
// // M   a   y   u   r   i  K
// // 0   1   2   3   4   5  6
// console.log(firstName.charCodeAt(4))

// console.log(firstName.charCodeAt('M'))

let firstName = "MayuriK"

// for(let i=0;i<firstName.length;i++){
//    // console.log(i)
//    console.log(firstName[i])
// }

for (let i = firstName.length - 1; i >= 0; i--) {
    console.log(firstName[i])
}
