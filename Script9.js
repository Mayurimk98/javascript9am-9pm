
// //loop

// //for 

// // 0 => 10(forward loop)
// // for (let i = 0; i <= 10; i++) {
// //     console.log(i)
// // }


// //10-0(reverse loop)
// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

//10 table
//10  ==> 100
//10  20 30

// for(let i=10; i<=100;i=i+10){
//     console.log(i)
// }

// for(let i=100;i>=10;i=i-10){
//     console.log(i)
// }

//break
//1- 10

// numb >=5 ==> break

// for (let i = 1; i <= 10; i++) {//2  3 4 5
//     console.log(i)
//     if (i >= 5) { //1>=5  2>=5  3>=5 4>=5  5>=5
//         break
//     }
//     //console.log(i) //1  2  3  4
// }

//i=1
//1<=10
//2<=10
//3<=10
//4<=10
//5<=10


//continue
//1-5  => 3

//1 2 3 4 5  => 1 2 4 5

// for (let i = 1; i <= 5; i++) {//2  3  4 5  6
//     //console.log(i)
//     if (i == 3) { //1==3 2==3 3==3 4==3  5==3
//         continue
//     }
//     console.log(i)//1  2  4  5
// }

//i=1
//1<=5
//2<=5
//3<=5
//4<=5
//5<=5
//6<=5


//=====================================================

//syntax  => while loop
// initialization
// while(condition){
//     //statements

//     //increment/decrement
// }

//1-5
// let i=1
// while(i<=5){
//     console.log(i) //1  2  3  4  5
//     i++ //2  3 4  5  6
// }

//i=1
//1<=5
//2<=5
//3<=5
//4<=5
//5<=5
//6<=5


//10-0
// let i=10
// while(i>=0){
//     console.log(i)

//     i--
// }


//5 
// let j=5
// while(j<=50){
//     console.log(j)

//     j=j+5
// }

//==========================================

//break

//1-5 
//3 break

// let i = 1
// while (i <= 5) { //1<=5  2<=5  3<=5

//     console.log(i)

//     if (i == 3) { ///1==3  2==3  3==3
//         break
//     }

//     //console.log(i) //1 2

//     i++  //2  3
// }


//mayuri ==> 5 time while

// let i = 1
// while (i <= 5) {
//     console.log("Mayuri")
//     i++
// }


//1-5 loop 3 break

// let i = 1
// while (i <= 5) {
//     // console.log(i)
//     if (i == 3) {
//         break
//     }
//     console.log(i)
// }

//1 2 3

//1 2

//====================================================

//continue

//1- 5 loop 3 continue
//1 2 4 5


// for(let i=1;i<=5;i++){
//     if(i==3){
//         continue
//     }
//     console.log(i)
// }

// let i = 1
// while (i <= 5) { //1<=5 2<=5  3<=5  3<=5  3<=5
//     if (i == 3) { //1==3 2==3 3==3 3==3  3==3
//         continue
//     }
//     console.log(i) //1  2
//     i++ //2 3
// }

//i =1


//1 2 4 5


let i = 1
while (i <= 5) {  //1<=5 2<=5  3<=5  4<=5  5<=5  6<=5
    if (i == 3) {  //1==3 2==3  3==3  4==3  5==3
        i++ // 4
        continue
    }
    console.log(i)  //1 2  4 5
    i++  //2  3  5  6
}










