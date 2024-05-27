// let a= [
//     {
//                 id:1,
//                 name:"rohit",
//                 age:18,
//                 email:"laxman@123",
//                 city : "jaipur",
        
//             },
//             {
//                 id:2,
//                 name:"mohit",
//                 age:38,
//                 email:"mohit@123",
//                 city : "udaypur",
        
//             },
//             {
//                 id:3,
//                 name:"mukesh",
//                 age:23,
//                 email:"mukesh@123",
//                 city : "bangluru",
        
//             },
//             {
//                 id:4,
//                 name:"ram",
//                 age:21,
//                 email:"ram@123",
//                 city : "pune",
        
//             },
//             {
//                 id:5,
//                 name:"sohan",
//                 age:28,
//                 email:"sohan@123",
//                 city : "nagaur",
        
//             },
//             {
//                 id:6,
//                 name:"ronak",
//                 age:17,
//                 email:"ronak@123",
//                 city : "pali",
        
//             },
//             {
//                 id:7,
//                 name:"raju",
//                 age:24,
//                 email:"raju@123",
//                 city : "udaypur",
        
//             },
//             {
//                 id:8,
//                 name:"laxman",
//                 age:15,
//                 email:"laxman@123",
//                 city : "hydrabad",
        
//             },
//             {
//                 id:9,
//                 name:"viksa",
//                 age:21,
//                 email:"vikash@123",
//                 city : "jodhpur",
        
//             },
//             {
//                 id:10,
//                 name:"lucky",
//                 age:17,
//                 email:"lucky@123",
//                 city : "nagaur",
        
//             },
           
// ]
// let b= a.filter((item)=>{
//   return item.age>=18
// })
// console.log(b)

// let a= [
//     {
//                 id:1,
//                 name:"rohit",
//                 age:18,
//                 email:"laxman@123",
//                 city : "jaipur",
//                 marks:{
//                     p:75,
//                     c:80,
//                     m:56,
//                 }
        
//             },
//             {
//                 id:2,
//                 name:"mohit",
//                 age:38,
//                 email:"mohit@123",
//                 city : "udaypur",
//                 marks:{
//                     p:55,
//                     c:80,
//                     m:86,
//                 }
//             },
//             {
//                 id:3,
//                 name:"mukesh",
//                 age:23,
//                 email:"mukesh@123",
//                 city : "bangluru",
//                 marks:{
//                     p:95,
//                     c:60,
//                     m:66,
//                 }
//             },
//             {
//                 id:4,
//                 name:"ram",
//                 age:21,
//                 email:"ram@123",
//                 city : "pune",
//                 marks:{
//                     p:55,
//                     c:90,
//                     m:86,
//                 }
//             },
//             {
//                 id:5,
//                 name:"sohan",
//                 age:28,
//                 email:"sohan@123",
//                 city : "nagaur",
//                 marks:{
//                     p:77,
//                     c:85,
//                     m:59,
//                 }
//             },
//             {
//                 id:6,
//                 name:"ronak",
//                 age:17,
//                 email:"ronak@123",
//                 city : "pali",
//                 marks:{
//                     p:75,
//                     c:80,
//                     m:96,
//                 }
//             },
//             {
//                 id:7,
//                 name:"raju",
//                 age:24,
//                 email:"raju@123",
//                 city : "udaypur",
//                 marks:{
//                     p:55,
//                     c:80,
//                     m:56,
//                 }
//             },
//             {
//                 id:8,
//                 name:"laxman",
//                 age:15,
//                 email:"laxman@123",
//                 city : "hydrabad",
//                 marks:{
//                     p:75,
//                     c:60,
//                     m:56,
//                 }
//             },
//             {
//                 id:9,
//                 name:"viksa",
//                 age:21,
//                 email:"vikash@123",
//                 city : "jodhpur",
//                 marks:{
//                     p:45,
//                     c:60,
//                     m:86,
//                 }
//             },
//             {
//                 id:10,
//                 name:"lucky",
//                 age:17,
//                 email:"lucky@123",
//                 city : "nagaur",
//                 marks:{
//                     p:95,
//                     c:80,
//                     m:96,
//                 }
//             },
           
// ]
// let b=a.filter((item)=>{
//     return ((item.marks.p+item.marks.c+item.marks.m)/3)>75
   
    
// })
// console.log(b)


// const complexData = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//       address: {
//         street: "123 Main St",
//         city: "Anytown",
//         country: "USA",
//       },
//       orders: [
//         { orderId: "A123", amount: 50.75, status: "completed" },
//         { orderId: "B456", amount: 30.25, status: "pending" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 25,
//       address: {
//         street: "456 Oak St",
//         city: "Othercity",
//         country: "USA",
//       },
//       orders: [
//         { orderId: "C789", amount: 10.5, status: "pending" },
//         { orderId: "D012", amount: 10.2, status: "completed" },
//       ],
//     },
//   ]


// let a = complexData.filter((item)=>{
    
  
//   return item.address.country == "USA" && item.orders.some((i)=> i.amount > 50)

// }
// )

// console.log(a)



//   const b= complexData.filter((item)=>{
//     return item.age<=25
//   })
//   console.log(b)

// const c= complexData.map((item)=>{
//     return item.name
//   })
//   console.log(c)

// const b= complexData.map((item)=>{
//     return item.orders.filter((item)=>{
//         return item.amount>50
//     })
//   })
//   console.log(b)

// const b= complexData.map((item)=>{
//     return item.orders.map((item)=>{
//         return item.orderId
//     })
//   })
//   console.log(b)


// const b= complexData.map((item)=>{
//     return item.orders.filter((item)=>{
//         return item.status == "pending"
//     })
//   })
//   console.log(b)

// const b= complexData.map((item)=>{
//     return item.orders.filter((item)=>{
//         return item.amount>=30 && item.amount<=70
//     })
//   })
//   console.log(b)


// let a=complexData.map((i)=>{

//       return{
//           name:i.name,
//           totalamount:i.orders.reduce((x,y)=>{
//               return (x.amount+y.amount)
//           })
//       }
//   })
//   console.log(a)

// let a=complexData.map((i)=>{

//   return{
//       name:i.name,
//      orderid:i.orders.map((item)=>{
//       return item.orderId
//      })
//   }
// })
// console.log(a)

 



 

// var library = [ 
//   {
//       title: 'Bill Gates',
//       author: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       title: 'Steve Jobs',
//       author: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       readingStatus: false
//   }];

// for (var i = 0; i < library.length; i++) 
//  {
//   var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else
//   {
//    console.log("You still need to read " + book);
//   }
//  }
