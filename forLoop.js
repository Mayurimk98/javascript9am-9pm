

// //function => to avoid repetative operation 

// // loop => repetative operation based condition

// //for loop

// // for(initialization;conditionCheck;increment/decremenet){
// //     //statements
// // }


// //mayuri => 5 times

// // for (let i = 0; i < 5; i++) {
// //     // console.log(i)
// //     console.log(i + "Mayuri")
// // }

// //1-3 print

// //i++ ==> i=i+1
// // for (let i = 1; i <= 3; i++) {//2 3 4
// //     console.log(i) //1 2 3
// // }

// // //i=1

// // //1<=3 => true
// // //2<=3 => true
// // //3<=3 => true
// // //4<=3 =>  false

// // //2 table reverse

// //20  18 16

// // for (let i = 20; i >= 2; i = i - 2) {
// //     console.log(i)
// // }

// //for loop => duration 
// //while loop => we dont the duration

// //1- 5 while

// //initailazation
// // while(condition){
// //     //statemnets

// //     //incre/decre
// // }

// let i = 1
// while (i <= 5) {
//     console.log(i)

//     i++;
// }

// //5 table
// let j = 5
// while (j <= 50) {
//     console.log(j)

//     j = j + 5
// }

// let k = 50
// while (k >= 5) {
//     console.log(k)
//     k = k - 5
// }

//break and continue

//1-5 

//1 2 4 5

//for loop with break

// for (let i = 1; i <= 5; i++) {
//     if (i == 3) {
//         break
//     }
//     console.log(i) //1 2
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i == 3) {
//         break
//     }
// }

//for loop with continue
// for (let i = 1; i <= 5; i++) {
//     if (i == 3) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i == 3) {
//         continue
//     }
//     console.log("mayuri")
// }

//while loop break

// let i = 1
// while (i <= 5) {
//     if (i == 3) {
//         break
//     }
//     console.log(i) //1 2

//     i++
// }

// let i = 1
// while (i <= 5) {
//     console.log(i) 
//     if (i == 3) {
//         break
//     }
//     i++
// }

//while loop with continue

let k = 1
while (k <= 5) { 
    if (k == 3) { 
        k++
        continue
    }
    console.log(k) 
    k++ 
}