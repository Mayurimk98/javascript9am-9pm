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


// ["js","selenium","selenium","selenium"]
//["java", "selenium", "selenium"]


// let arr = [12, 45, 78, 90]

// //100
// console.log(arr.fill(100,1))

// student.forEach(function(el){
//     console.log(el.skill.fill("selenium",1))
// })

//   userName:"mayuri-katwe"


//[mayuri, katwe]. join("-")  => mayuri-katwe


// let d2 = student.map(function (el) {
//     return  el.fullName = el.firstName + el.lastName
// })

// console.log(d2)
// console.log(student)

//

//skill: ["js", "py", "cy", 'HTML']

//javaOne, pythonOne

// student.forEach((el)=>{
//     el.skill.splice(0,2,"javaOne","pythonOne")
// })

// console.log(student)

student.forEach((el)=>{
    el.skill.reverse()
})
console.log(student)








