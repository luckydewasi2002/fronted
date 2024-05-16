let a= [
    {
                id:1,
                name:"rohit",
                age:18,
                email:"laxman@123",
                city : "jaipur",
        
            },
            {
                id:2,
                name:"mohit",
                age:38,
                email:"mohit@123",
                city : "udaypur",
        
            },
            {
                id:3,
                name:"mukesh",
                age:23,
                email:"mukesh@123",
                city : "bangluru",
        
            },
            {
                id:4,
                name:"ram",
                age:21,
                email:"ram@123",
                city : "pune",
        
            },
            {
                id:5,
                name:"sohan",
                age:28,
                email:"sohan@123",
                city : "nagaur",
        
            },
            {
                id:6,
                name:"ronak",
                age:17,
                email:"ronak@123",
                city : "pali",
        
            },
            {
                id:7,
                name:"raju",
                age:24,
                email:"raju@123",
                city : "udaypur",
        
            },
            {
                id:8,
                name:"laxman",
                age:15,
                email:"laxman@123",
                city : "hydrabad",
        
            },
            {
                id:9,
                name:"viksa",
                age:21,
                email:"vikash@123",
                city : "jodhpur",
        
            },
            {
                id:10,
                name:"lucky",
                age:17,
                email:"lucky@123",
                city : "nagaur",
        
            },
           
]
let b= a.filter((item)=>{
  return item.age>=18
})
console.log(b)