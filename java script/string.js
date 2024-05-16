// let name ="this is my string"
// console.log(name)
// console.log(typeof name)
// console.log(name.length)
// for (let i=0; i<name.length;i++){
//     console.log(name[i])
// }
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.CharArt)




//count of i in the string.
// let name ="this is my string"
// let j=0;
// for(let i=0; i<name.length;i++){
//     if(name[i]=="i"){
//         j++
//     }
// }
// console.log(j)

// let name = "laxman dewasi"
// let lname ="nagaur"
// console.log(name.length)
// console.log(name.charAt(3)) .  //char in no of 3==m
// console.log(name.charCodeAt(3)) // assic value ke liye
   
// console.log(name.at(3)) // char in no. of value 3==m

// console.log(name[3])    // char in no. of value 3==m

// console.log(name.slice(1,9))  // all char print 1 to 9
// console.log(name.slice(8)) // frist ke 8 char ko chhodkar ke print honge

// console.log(name.slice(-1))  // no. according frist ke char ko chhodkar print honge

// console.log(name.slice(-12,-6)) // no according print
// console.log(name.substring(8,10)) // no. according print

// console.log(name.substr(8)) // no 8 ke bad ke sare print

// console.log(name.substr(-7)) // no 8 ke bad ke sare print

// console.log(name.concat(lname)) //addition of name
// let name = "laxman dewasi"
// console.log(name.trim()) // print name

// console.log(name.trimStart())
// console.log(name.trimEnd(5))  // not understand

// let name= "5"
// console.log(name.padStart(4,0)) // total no. char and tin zero last 5
// console.log(name.padStart(4,"x")) // total no. char and tin x last 5

// console.log(name.padEnd(4,0)) //total no. char and pele 5 and last teen zero
// console.log(name.padEnd(4,"x")) // total no. char and pele 5 and last  teen x

// let name = "hello regex"
// console.log(name.repeat(3)) // repeat in 3 time
// console.log(name.replace("regex", "world"))

// console.log(name.replaceAll("world")) // not understand




// let sentence = "write a function that capitalizes the first letter of each word in a sentence";

// // Split the sentence into an array of words
// let words = sentence.split(" ");

// // Iterate through the array of words
// for (let i = 0; i < words.length; i++) {
//     // Capitalize the first letter of each word
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }

// // Join the words back into a sentence
// let capitalizedSentence = words.join(" ");

// console.log(capitalizedSentence); // Output: "Write A Function That Capitalizes The First Letter Of Each Word In A Sentence"


// const str1 = "abcd";
// const str2 = "cdag";

// // Step 1: Check if the lengths are equal
// if (str1.length !== str2.length) {
//     console.log(str2 + " is not a rotation of " + str1);
// } else {
//     // Step 2: Concatenate str1 with itself
//     const concatenated = str1 + str1;

//     // Step 3: Check if str2 is a substring of the concatenated string
//     if (concatenated.includes(str2)) {
//         console.log(str2 + " is a rotation of " + str1);
//     } else {
//         console.log(str2 + " is not a rotation of " + str1);
//     }
// }


// let name1= "laxman"
// let  name2= "namxal"

// let revers=  name2.split("").reverse().join("")

// if(name1===name2){
//     console.log("is a rotation of ")
// }
// else{
//     console.log("not a rotation of ")
// }
// let sentence = "The quick brown fox jumped over the lazy dog";
// let words = sentence.split(" ");
// var longestWord = "";

// for (let i = 0; i < words.length; i++) {
//     var word = words[i].replace(/[^A-Za-z0-9]/g, '');
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }

// console.log("The longest word is: " + longestWord);

// function count(name){
//     let str = name.toLowerCase();
//     let count =0;
//     for(let i=0;i<=str.length;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count++;
//     }
// }
// console.log("number of vowels :", count)
// }

// count("my name is laxman")

// let a=(name)=>{
   

// let ulta = name.split(" ");

// let revers= ulta.reverse();

// let joint= revers.join(" ");

// console.log(joint);
// }
// a("my name is akshay singh ")

//frequency of each word
// let a= "i love programming language"
// let i_freq=0;
// for(i of a){
//     if(i=="i"){
//         i_freq++
//     }
// }
// console.log(i_freq)






