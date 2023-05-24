//Array

let x = 10

let x1 = [12, 23, 45]

let y1 = [12, "mayuri", true]

//Javascript ==> Object
//property and methods

//array ==> object

let marks = [1, 2, 3, 4, 5, 10, 100, 90]
//  index    0  1  2  3  4  5    6   7

console.log(marks[4])//5

console.log(marks[7]) //90

console.log(marks[10])//undefined

//length ==> proprty
console.log(marks.length)//8

//last element of array

//marks[7]
console.log(marks[marks.length - 1])//90


//methods()
//action 
//return

//1. push()
//action => element last add
//return => new length

// let student=["mayuri","vaibhav","mahesh","rahul"]
// let z1=student.push("mahendra")
// console.log(z1)//5
// console.log(student)

//2. unshift()
//action =>add element at first
//return => new length
// let student=["mayuri","vaibhav","mahesh","rahul"]
// let z2=student.unshift('rohan')
// console.log(z2) //5
// console.log(student)

//3. pop()
//action => remove the element from last
//return => removed element
// let student = ["mayuri", "vaibhav", "mahesh", "rahul"]
// let z3 = student.pop()
// console.log(z3)//rahul
// console.log(student)

//4. shift()
//action => remove first element
//return => removed element

// let student = ["mayuri", "vaibhav", "mahesh", "rahul"]
// let z4 = student.shift()
// console.log(z4)//mayuri
// console.log(student)

//5. includes()
//action=> check whether element present in array if present => true else false
//return  => boolean

// let score=[22,55,88,99,44,12]
// let z5=score.includes(88)
// console.log(z5)//true

// let z6=score.includes(100)
// console.log(z6)

//6. indexof()
//action => gives the index of given element if found otherwise return -1
//return => number
// let score=[22,55,88,99,44,12,22]

// let z7=score.indexOf(44)
// console.log(z7)//4

// let z8=score.indexOf(222)
// console.log(z8)//-1

// let z9=score.indexOf(22)
// console.log(z9) //0

//7. flat()
//action => convert all element of array into single array
//return => new array

//            0    1  2     0   1   2    0   1   2    3
// let numA = [[78, 89, 22], [33, 90, 54], [55, 32, 77, 88]]
// //              0             1              2  

// //[]

// console.log(numA[2][1])//32

// console.log(numA[1][2])//54

// let y2=numA.flat()
// console.log(y2)


//8. join()
//action => join the array element with anything we can pass in join method
//return => string

// let score=[22,55,88,99,44,12,22]
// let y3=score.join('$')
// console.log(y3)
// console.log(typeof y3)

//9. reverse()
//action => reverse the array
//return => new array
// let city=["nashik","pune","nagpur","jalgoan"]
// let y3=city.reverse()
// console.log(y3)


//1-5 

// for(let i=1;i<=5;i++){
//     console.log(i)
// }

//5-1
// for(let i=5;i>=1;i--){
//     console.log(i)
// }


// let city = ["nashik", "pune", "nagpur", "jalgoan","nagpur","nanded"]
// //          0         1           2          3       4        5


// //city[1] //pune
// for (let i = 0; i <= 3; i++) {
//     //console.log(i)
//     console.log(city[i])
// }

// for (let i = 0; i <= city.length-1; i++) {
//     //console.log(i)
//     console.log(city[i])
// }

//problem 1
// let birthyear = [1998, 2001, 2012, 1989]
// // age ==> 2023-1998//25
// //[25,20,12,34]


// let arr = []
// for (let i = 0; i < birthyear.length; i++) {
//     //console.log(birthyear[i])
//     let u1 = 2023 - birthyear[i]
//     arr.push(u1)
// }
// console.log(arr)


// //problem 2

// let scores = [56, 20, 44, 78, 25, 09, 90, 23, 45, 34, 12]
//>25
//[56,44,78,90,45,34]

// let greter25 = []
// for (let i = 0; i < scores.length; i++) {
//     //console.log(i)//index
//     //console.log(scores[i])
//     if (scores[i] > 25) {
//         greter25.push(scores[i])
//     }
// }
// console.log(greter25)


//problem 3

let numbesA = [2, 6, 10, 20]
//38
//2+6 //8+10 => 18 => 18+20 => 38

let sum = 0 //2 //8 //18 //28
for (let i = 0; i < numbesA.length; i++) {
    //console.log(numbesA[i])

    sum = sum + numbesA[i]   
     //     0 + 2
     //     2 + 6
     //     8 + 10
     //     18 + 20

}
console.log(sum)










