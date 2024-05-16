let flag=0;
let num=9;
for(let i=2; i<num; i++){
    if(num%i==0){
        flag=1;

    }
}
if(flag==0){
    console.log("prime")
}
else{
    console.log(" not aprime")
}