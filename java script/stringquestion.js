// 1. Reverse a String: Write a function that takes a string as input and returns the string reversed.
// ans.
// let name="laxman dewasi"
// console.log(name.split("").reverse() .join(""));


// by function
// ans.
// function reverse(a){
//     console.log(a.split("").reverse().join(""))
// }
// reverse("laxman")
// --------------------------------------------------------------------

// 2. Palindrome Check: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
// ans.
// let a= "ram";
// let c=''
// for( let i=(a.length)-1;i>=0;i--){
//     c=c+a[i]
// }
// if(a==c){
//     console.log("pallindrome")
// }
// else{
//     console.log(" not pallindrome")
// }

// by fumction

// ans.
// function pallindrome(name){
//     let c=''
//     for(let i=(name.length)-1;i>=0;i--){
//         c=c+name[i]
       
//     }
//     if(name==c){
//         console.log("pallindrome")
//     }
//     else{
//         console.log(" not pallindrome")
//     }
// }
//  pallindrome("laxman dewasi")



// --------------------------------------------------------------------------
// 3. Count Vowels: Write a function that counts the number of vowels in a given string.
// ans.
// let str= "laxman dewasi"
// str=str.toLowerCase();
// let count=0;
// for(let i=0;i<=str.length;i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         count++;
//     }
   
   
// } console.log("number of vowels :", count)

// by function
// ans.
// let  a=(name)=>{
//     let str = name.toLowerCase();
//     let count =0;
//     for(let i=0;i<=str.length;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count++;
//     }
// }
// console.log("number of vowels :", count)
// }
// a("my name is laxman")
// -----------------------------------------------------------


// 4. Longest Word: Write a function that finds the longest word in a sentence.
// ans.
// let a=" i love programming language";
// let b=a.split(" ")
// let max=0;
// for(let i=0;i<b.length;i++){
//     if(b[i].length>max)
//         max=b[i].length
// }
// for(let i=0;i<b.length;i++){
//     if(b[i].length==max){
//         console.log(b[i])
//     }
// }
// by function
// ans.
// let name=(a)=>{
   
// let b=a.split(" ")
// let max=0;
// for(let i=0;i<b.length;i++){
//     if(b[i].length>max)
//         max=b[i].length
// }
// for(let i=0;i<b.length;i++){
//     if(b[i].length==max){
//         console.log(b[i])
//     }
// }
// }
// name("i love programming language")

// --------------------------------------------------------------------------------
// 5. Capitalize Letters: Write a function that capitalizes the first letter of each word in a sentence.
// ans.

// let sentence = " rahul is going to banglore"

// let words= sentence.split(" ")
 
// for (let i=0;i<words.length;i++){
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// let cs = words.join(" ");
// console.log(cs)

// by function
// ans.
// let a=(sentence)=>{
    

// let words= sentence.split(" ")
 
// for (let i=0;i<words.length;i++){
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// let cs = words.join(" ");
// console.log(cs)

// }
// a(" rahul is going to banglore")
// ---------------------------------------------------------------------

// 6. Reverse Words: Write a function that reverses the order of words in a sentence.

// ans.
// let name="my name is akshay singh "

// let ulta = name.split(" ");

// let revers= ulta.reverse();

// let joint= revers.join(" ");

// console.log(joint);

// by function
// ans.
// let a=(name)=>{
   

// let ulta = name.split(" ");

// let revers= ulta.reverse();

// let joint= revers.join(" ");

// console.log(joint);
// }
// a("my name is akshay singh ")
// -----------------------------------------------------------------


//q.)Write a JavaScript function to check whether an 'input' is a string or not.

// let name="ram is a boy"
// if( typeof name=='string'){
//     console.log("true")
// }
// else{
//     console.log("false")
// }


//------------------------------------------------------------

// que.)Write a JavaScript function to check whether a string is blank or not.

// let name=""
// if( 0===name.length){
//     console.log("blank")
// }
// else{
//     console.log("string")
// }

//------------------------------------------------------------------------------------------------
//Write a JavaScript function to split a string and convert it into an array of words.

// let name="rajan";
// console.log(name.split(""))

//------------------------------------------------

//que.)Write a JavaScript function to extract a specified number of characters from a string

// let name="im from nagaur";
// console.log(name.slice(0,4))

//--------------------------------------------------

let sentence = " rahul is going to banglore"

let words= sentence.split(" ")
words = words.charAt(0).toUpperCase() + words.slice(1);

let cs = words.join(" ");
console.log(cs)