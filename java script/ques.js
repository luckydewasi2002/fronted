let n=50;
let flag=0;
let i;
for( i=2;i<=n;i++ ){
    for(let j=2;j<=i;j++){
        if(i%j==0){
            flag=1;
        }
    }
  
}
if(flag==0){
    console.log(i)
}