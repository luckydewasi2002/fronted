let a=50;
let b=80;
let c= 90;
let d=75;
let e=65;
let f=a+b+c+d+e;
let g= (f/5);
console.log(g )

if(g>=90){
    console.log("grade A")
}
  else if(g>=80 && g<90){
    console.log("grade B")
}
else if(g>=70 && g<80){
    console.log("grade C")
}
else if(g>=60 && g<70){
    console.log("grade D")
}
else if(g>=40 && g<60){
    console.log("grade E")
}
else{
    console.log("grade F")
}