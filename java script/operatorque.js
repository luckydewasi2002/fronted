//Write a Java Script Program to print all natural numbers from 1 to n. – using while loop

// let i=1;
// while(i>0){
//     console.log(i)
//     i++;
// }
// ----------------------------------------
// Write a Java Script Program to print all natural numbers in reverse (from n to 1). – using while loop
// ans.
// let num=10;
// while(num>1){
//     console.log(num)
//     num--
// }
//---------------------------
// Write a Java Script Program to print all alphabets from a to z. – using while loop
// ans.
// let i;

// Initializing i = 65 for Uppercase:
//i = 65;
// console.log("Alphabets form (A-Z) are:");

// while (i <= 90) {
//     console.log(String.fromCharCode(i));
//     i++;
// }
// 
// -----------------------------------------
// Write a Java Script Program to count number of digits in a number.
// ans.
 
// let num=1535;

// let count=0;


// while(num!=0){
  
    
//     num=parseInt(num/10);
//     count++;
// }

// console.log(count)

//-------------------------------------------
// Write a Java Script Program to calculate sum of digits of a number.
// ans

//let num=1535;

// let count=0;
// let sum=0;
// while(num!=0){
//     sum=sum+num%10;
//     num=parseInt(num/10);
// }
// console.log(sum)
//----------------------------------------------
// Write a Java Script Program to calculate product of digits of a number.
// ans.
// let num=4513;
// let product=1;
// let rem;
// while(num!=0){
//     rem =num%10;
//     product=product*rem;
//     num=parseInt(num/10);
// }
// console.log(product)

//----------------------------------

// Write a Java Script Program to enter a number and print its reverse.
// ans.
// ans.
// let num=123;
// let rem =0;
// let sum=0;
// while(num!=0){
//     rem=num%10;
//     sum=sum*10+rem;
//     num=parseInt(num/10);
// }
// console.log(sum)
//---------------------------
// Write a Java Script Program to check whether a number is palindrome or not.
// ans.
// let num=12321;
// let rem,sum=0;
// let temp=num;
// while(num!=0){
//     rem=num%10;
//     sum=sum*10+rem;
//     num=parseInt(num/10);

// }
// if(temp==sum){
//     console.log("num is pallindrome")
// }
// else{
//     console.log("num is not a pallindrome")
// }

//-----------------------------

// Write a Java Script Program to print all ASCII character with their values.
//ans
// for (var i = 0; i < 128; i++) {
//     console.log("Character: " + String.fromCharCode(i) + " Value: " + i);
// }

//--------------------------------------
// Write a Java Script Program to find power of a number using for loop.
//ans.
// let base=2;
// let exp=3;
// let result=1;
// for(let i=0; i<exp; i++){
//     result=result*base;

// }
// console.log(result)

//---------------------------------------

//Write a Java Script Program to calculate factorial of a number.
//ans.

// let num=5;
// let fact=1;
// for(let i=1;i<=num;i++){
//     fact=fact*i;
// }
// console.log(fact)

//-------------------------------



//Write a Java Script Program to find LCM of two numbers.
// let num1=3;
// let num2=5;
// let max= parseInt(num1,num2)
// let lcm=max;
// while(lcm>0){
//     if(lcm%num1==0 && lcm%num2==0){
//         break;
//     }
//     lcm=lcm+max;
// }
// console.log(lcm)

//-----------------------
//Write a Java Script Program to find HCF (GCD) of two numbers.
//ans.
// let num1=3;
// let num2=9;
// let min=parseInt(num1,num2)
// let hcf=min;
// for(let i=1;i<=min;i++){
//     if(num1%i==0 && num2%i==0){
//         hcf=i;
//     }
// }
// console.log(hcf)

//-------------------------------

// Write a Java Script Program to check whether a number is Prime number or not.
// ans.
//let num=7;
// let flag=0;
// for(let i=2; i<num; i++){
//     if(num%i==0){
//         flag=1;

//     }
// }
// if(flag==0){
//     console.log("prime")
// }
// else{
//     console.log(" not aprime")
//}

//----------------------------

// Write a Java Script Program to check whether a number is Armstrong number or not.
// ans.
// let num=153;
// let rem =0;
// let sum=num;
// let count=0;
// let check=num;

// while(num!=0){
//     rem=num%10;
    
//     num=parseInt(num/10);
//     count++;
// }
// let x=0;
// while(sum!=0){
//    let rem=sum%10;
//    x=x+rem**count;
//    sum=parseInt(sum/10)
// }


// console.log(x);
// if(check==x){
//     console.log("armstrong number" )
// }
// else{
//     console.log( "not armstrong" )
// }
//----------------------



// Write a Java Script Program to print Fibonacci series up to n terms.
// ans.
// let n1=0;
// let n2=1;
// let n3;
// console.log(n1);
// let i=1;

// while(i<=6){
//     n3=n1+n2;
//     console.log(n3);
//     n1=n2;
//     n2=n3;
//     i++;
// }

//-------------------------------

