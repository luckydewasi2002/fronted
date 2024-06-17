let num=6;
let flag=0;
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
