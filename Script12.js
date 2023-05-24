
//Array
let y1 = 10

//javascript => object => property and methods


// let numb=[12,23,45,67]
// //  index  0  1  2  3
// console.log(numb.length)//4

//methods()
//1. push()
// let y2=numb.push(100)
// console.log(y2)//5
// console.log(numb)

// //2. unshift()
// let y3=numb.unshift(123)
// console.log(y3)//6
// console.log(numb)

//3. pop()

// let numb=[12,23,45,67]
// //  index  0  1  2  3
// let y4=numb.pop()
// console.log(y4)//67
// console.log(numb)

// //4. shift()
// let y5=numb.shift()
// console.log(y5)
// console.log(numb)

//5. includes()
// let numb=[12,23,45,67]
// let y6=numb.includes(76)
// console.log(y6)
// let y7=numb.includes(23)
// console.log(y7)

//6. indexOf()
// let numb=[12,23,45,67]
// //  index  0  1  2  3

// let y8=numb.indexOf(35)
// console.log(y8)//-1

// let y9=numb.indexOf(45)
// console.log(y9)//2


//7. flat()
//action => covert all array (nested array)into single array
//return => new array

let arr = [[1, 2, 3], [56, 89, 34, 67], [78, 34, 90]]
//[1,2,3,56,89 ,34, 67,78, 34, 90]

let s1 = arr.flat()
console.log(s1)

//8. join()
//action => join the element of array with given parameter
//return  => string

// let marks=[12,34,67,90]
// let s2=marks.join('@')
// console.log(typeof s2)
// //12@34@67@90

// let city=["pune","mumbai","jalna"]
// let s3=city.join('-')
// console.log(s3)
// console.log(typeof s3)

//9. reverse()
//action => reverse the array element
//return => new array

// let city=["pune","mumbai","jalna","sangamner"]
// let s4=city.reverse()
// console.log(s4)


//for loop
//1-10 number

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// let city=["pune","mumbai","jalna","sangamner","nagpur"]
// //  index   0        1        2        3        4

// console.log(city[2])//jalna
// console.log(city[0]) //pune
// console.log(city[4])//nagpur

// console.log(city.length)//5
// console.log(city.length-1) //4

// console.log(city[city.length-1])//nagpur


// for(let i=0;i<=city.length-1;i++){
//     console.log(city[i])
// }

// console.log('=============================')

// for(let i=city.length-1;i>=0;i--){
//     console.log(city[i])
// }







// console.log(city.length-1) //4

// for(let i=0;i<city.length-1;i++){
//     //console.log(i)//index
//     console.log(city[i])
// }


//Problem 1
//let marks = [12, 45, 90, 67, 45, 34]
//marks.push(1200)

//         0  1  2  3  4  5
//10 marks grase

// ouput [22, 55, 100, 77, 55, 44]

// let plus10 = []
// for (let i = 0; i <= marks.length - 1; i++) {
//     //console.log(marks[i])
//     //console.log(marks[i]+10)
//     let r1=marks[i]+10
//     plus10.push(r1)
// }

// console.log(plus10)



//push()
//1,2,3
// let y1=[]
// y1.push(1)


//problem 2

let marks = [12, 30, 20, 25, 45, 90, 67, 45, 34]

//>25
//[30, 45, 90,67,45, 34]

let greter25=[]

for(let i=0;i<=marks.length-1;i++){
     if(marks[i]>25){
        //console.log(marks[i])

        greter25.push(marks[i])
     }
}

console.log(greter25)







