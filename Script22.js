
//object


// let student={
//     firstName:"mayuri",
//     lastName:"katwe",
//     rollNumber:23,
//     skill:["java","selenium",'cypress']
// }

// //retive
// console.log(student.skill)

// console.log(student.skill[1])//selenium

// //update 
// student.rollNumber=54
// console.log(student)

// //add
// student.city="pune"
// console.log(student)

// student.skill.push("typescript")
// console.log(student)

//delete
// delete student['lastName']
// console.log(student)


// let student={
//     firstName:"mayuri",
//     lastName:"katwe",
//     rollNumber:23,
//     skill:["java","selenium",'cypress'],
//     isDoingjob:false
// }

// objectname.keyname=value
// objectname[keyname]

//for in
//keys
// for(let key in student){
//     console.log(key)
// }

// //values
// for(let key in student){
//     console.log(student[key])
// }

// //key and value
// for(let key in student){
//     console.log(key, student[key])
// }

//second type of loop
//for of

let student={
    firstName:"mayuri",
    lastName:"katwe",
    rollNumber:23,
    skill:["java","selenium",'cypress'],
    isDoingjob:false
}

//print keys
for(let a of Object.keys(student)){
    console.log(a)
}

//print value
for(let b of Object.values(student)){
    console.log(b)
}

//print keyand value

for(let [key,value] of Object.entries(student)){
    console.log(key,value)
}











