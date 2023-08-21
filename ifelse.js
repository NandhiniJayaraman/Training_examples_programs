// Even / odd
a=23
if(a%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}

// Larger two number
a=24
b=78
if(a>b){
    console.log(a,"is a larger number")
}
else{
    console.log(b,"is a larger number")
}
// smallest number
a=34
b=45
c=12
if((a>b)&&(b<c)){
    console.log(b,"is a smallest number")
}
else if((a>c)&&(b>c)){
    console.log(c,"is a smallest number")
}
else{
    console.log(a,"is smallest number")
}
// Grade percentage
g=60
if(g>=60){
    console.log("pass")
}
else{
    console.log("Fail")
}
// Leap Year or not
y=2012
if((y%4==0)&&((y%400==0)||(y%100!=0))){
    console.log("leap year")
}
else{
    console.log('not a leap year')
}
// Acending order
a=45
b=12
c=90
if((a<b)&&(a<c)){
    if(b<c){
        console.log(a,b,c)
    }
    else{
        console.log(a,c,b)
    }
}
else if((b<a)&&(b<c)){
    if(a<c){
        console.log(b,a,c)
    }
    else{
        console.log(b,c,a)
    }
}
else if((c<a)&&(c<b)){
    if(a<b){
        console.log(c,a,b)
    }
    else{
        console.log(c,b,a)
    }
}
else{
    console.log(c,b,a)
}
// age calculator
age=23
if(age<18){
    console.log("child")
}
else if(18<=age<65){
    console.log("adult")
}
else{
    console.log("senoir")
}
// weight calculator
w=40
if(w<18.5){
    console.log("under-weight")
}
else if(18.5<=w>=24.9){
    console.log("normal-weight")
}
else if(25<=w>=29.9){
    console.log("over-weight")
}
else{
    console.log("obese")
}
// temperature check
t=38
if(t>=37.5){
    console.log("fever")
}
else{
    console.log("no-fever")
}
