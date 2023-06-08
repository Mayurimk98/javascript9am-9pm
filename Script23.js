let student = [
    {
        firstName: "mayuri",
        lastName: "katwe",
        age: 25,
        city: "nashik",
        skill: ["js", "py", "cy"]
    },
    {
        firstName: "vaibhav",
        lastName: "raut",
        age: 12,
        city: "dhule",
        skill: ["java", "css"]
    },
    {
        firstName: "rohan",
        lastName: "rajapati",
        age: 40,
        city: "pune",
        skill: ["SQL", "panda"]
    },
    {
        firstName: "Sham",
        lastName: "kumar",
        age: 36,
        city: "sinnar",
        skill: ["html", "react"]
    }
]
//how many elememt present in student
//problem 1
// console.log(student.length)//4

// console.log(student[2])


//problem 2
//retive fullName of all element of student

//for loop
// for (let i = 0; i < student.length; i++) {
//     console.log(student[i].firstName + student[i].lastName)
// }

//for each()

// student.forEach(function(el,index,arr){
//     console.log(el.firstName+el.lastName)
// })


//problem 2
//age>25 ==> 
//print fullname of element whoes age greterthan 25

// student.forEach(function (el) {
//     if (el.age > 25) {
//         console.log(el.firstName + el.lastName)
//     }
// })


//with method
let u1 = student.filter(function (el, ind, arr) {
    return el.age > 25
})
console.log(u1) //[{},{}]

u1.forEach((el)=>{
    console.log(el.firstName+el.lastName)
})






















// let arr = [12, 25, 40, 56]

// let y1 = arr.filter(function (el, ind, ar) {
//     return el > 25
// })
// console.log(y1) //[40,56]


