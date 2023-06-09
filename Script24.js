let student = [
    {
        firstName: "mayuri",
        lastName: "katwe",
        age: 25,
        city: "nashik",
        skill: ["js", "py", "cy", 'HTML']
    },
    {
        firstName: "vaibhav",
        lastName: "raut",
        age: 12,
        city: "dhule",
        skill: ["java", "css", 'katlon']
    },
    {
        firstName: "rohan",
        lastName: "rajapati",
        age: 40,
        city: "pune",
        skill: ["SQL", "panda", 'Javascript', 'Typescript', 'angular']
    },
    {
        firstName: "Sham",
        lastName: "kumar",
        age: 36,
        city: "sinnar",
        skill: ["html"]
    }
]
//problem 3

//addition of all objects ages

// let sum = 0
// for (let i = 0; i < student.length; i++) {
//     //console.log(student[i].age)
//     sum = sum + student[i].age
// }
// console.log(sum)

// let sum = student.reduce(function (acc, el, index, arr) {
//     return acc + el.age
// }, 0)
// console.log(sum)


//======================================================================
//mayuri : 4
//vaibhav : 3
//rohan :5
//sham :1

// for (let i = 0; i < student.length; i++) {
//     console.log(student[i].firstName + " : " + student[i].skill.length)
// }

// //forEach()

// student.forEach(function (el, index, arr) {
//     console.log(el.firstName + " : " + el.skill.length)
// })


//==========================================================================

// for(let i=0;i<student.length;i++){
//     console.log(student[i].skill.push('Jmeter'))
// }

// console.log(student)

//==========================================================================
