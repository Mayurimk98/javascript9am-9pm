
// // let student="Mayurimahendrakatwe"

// // M  a  y  u  r i
// // 0  1  2  3  4  5

// //length==> 6-1 =5
// // console.log(student[1])//a

// // console.log(student[4])//r

// // //1-5
// // for(let i=1;i<student.length;i++){
// //     console.log(i)
// // }

// // for(let i=0;i<student.length;i++){
// //     console.log(student[i])
// // }

// // for(let i=student.length-1;i>=0;i--){
// //     console.log(student[i])
// // }

// //iruyaM
// // console.log(student[0])
// // console.log(student[1])
// // console.log(student[2])
// // console.log(student[3])
// // console.log(student[4])


// let student = "Mayuri"

// //0   ==== student.length-1
// //start end 
// let str = "" //M //Ma //May //Mayu //Mayur //Mayuri
// for (let i = 0; i < student.length; i++) {
//     //console.log(student[i])
//     str = str + student[i]

//     //""+M => M
//     //M+a=> Ma
//     //Ma+y=> May
//     //May+u => Mayu
//     //Mayu+r=> Mayur
//     //Mayur+i=> Mayuri

// }
// console.log(str)


// let student = "Mayuri"
// let str=""
// for(let i=student.length-1;i>=0;i--){
//     str=str+student[i]
// }
// console.log(str)


//============================================

// let student = "Mayuri"
// let str = ""
// for (let i = 0; i < student.length; i++) {
//     // console.log(i)
//     //console.log(student[i])
//     str = student[i] + str
// }
// console.log(str)


// let student = "MayuriRaoiiuuaakatwe"
// //a
// //4
// let count = 0
// for (let i = 0; i < student.length; i++) {
//     if (student[i] == "a") {
//         //count++
//         count = count + 1
//     }
// }
// console.log(count)


let student = "MayuriRaoiiuuaakatwe"
//a e i o u
//4
let count = 0
for (let i = 0; i < student.length; i++) {
    if (student[i] == "a" || student[i] == "e"|| student[i] == "i"|| student[i] == "o"|| student[i] == "u") {
        //count++
        count = count + 1
    }
}
console.log(count)

//string ==> 
//switch case


