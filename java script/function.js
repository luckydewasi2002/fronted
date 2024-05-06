// function add(a,b){
//     console.log(a+b)
// }
// function minus(a,b){
//     console.log(a-b)
// }
// function mul(a,b){
//     console.log(a*b)
// }
// function divide(a,b){
//     console.log(a/b)
// }
// add(10,20)
// minus(20,10)
// mul(10,50)
// divide(4,5)
// minus(5,3)

// function add(a,b=30){
//     return a+b
// }
// let ans=add(10,20)
// console.log(ans)


// function add(a,b=30){
//     return a+b
// }
// let ans=add(10)
// console.log(ans)

// function add(a=20,b=30){
//     return a+b
// }
// let ans=add()
// console.log(ans)



// check prime or not proime number.....
// function primeNotprime(n){
//     for (let i=2;i<n;i++){
//         if(n%i==0)
//         return 1
//     }
//     return 0
// }
// let ans =primeNotprime(6)
// if(ans==0){
//     console.log("prime number")
// }
// else{
//     console.log(" not prime number")
// }

// n prime number check ke liye
// function primeNotprime(n){
//     for(let i=1;i<n;i++){
//         let flag=0;
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 flag=1;
//             }
//         } if(flag==0){
//             console.log(i)
//         }
//     }
// }
// let ans=primeNotprime(100)


// function armstrong(n) {
//     let temp = n;
//     let freq = 0;
//     let sum = 0;
//     while (temp != 0) {
//         temp = parseInt(temp / 10)
//         freq++;
//     }
//     while (n != 0) {
//         let rem = n % 10;
//         sum = sum + rem ** freq;
//         n = parseInt(n / 10)
//     }
//     return sum;
// }
// let no = 254;
// let ans = armstrong(no)
// if (ans == no) {
//     console.log("armstrong number")
// }
// else {
//     console.log(" not a armstrong number")
// }