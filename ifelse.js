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
// blood pressure
bp=140
dp=100
if((bp<120)&&(dp<80)){
    console.log("normal")
}
else if((120<=bp>=129)&&(db<80)){
    console.log("evaluated")
}
else if((130<=bp>=139)&&(80<=dp>=89)){
    console.log("stage-1 hypertension")
}
else{
    console.log("stage-2 hypertension")
}
// income tax
i=1800000
if(i<=25000){
    console.log("no tax")
}
else if(25000<i>=500000){
    console.log("low tax bracket")
}
else if(500000<i>=1000000){
    console.log("middle tax bracket")
}
else{
    console.log('high income tax bracket')
}
// income and age
i=200000 
a=35
if((18>=a)&&(a>=65)){
    console.log('no retirement saving needed')
}
else if(i>=500000){
    console.log("low retirement goal")
}
else if((i>=500000)&& (i<=2000000)){
    console.log('middle level retirement goal')
}
else{
    console.log('high level retirement goal')
}
// cgpa grade system
g=8
if(g<=2){
    console.log("acadamic probation")
}
else if((g>2.0)&&(g<=10)){
    console.log("good standing")
}
else{
    console.log("your grade point is wrong")
}
// credit score
c=750
if(c<600){
    console.log("poor credit")
}
else if(600<=c<=699){
    console.log("fair credit")
}
else if(700<=c<=799){
    console.log("good credit")
}
else{
    console.log("excellent credit")
}
// experience calci
p=45
e=5
if((p<25)&&(e<1.0)){
    console.log("entry level")
}
else if((25>=p>=30)&&(1.0>=e<5.0)){
    console.log("junior")
}
else if((p<=40)&&(5.0>=e<10.0)){
    console.log("senior")
}
else{
    console.log("expert")
}
// positive or negative
a=-8
if((a=0)&&(a>0)){
    console.log("positive")
}
else{
    console.log("negative")
}
// divible of 5 and 11
a=55
if((a%5==0)&&(a%11==0)){
    console.log(a,"is divisible of 5 and 11")
}
else{
    console.log(a,"is not divisible of 5 and 11")
}
// alphapet or not
a1='P'
if((a1>='a')&&(a1<='z')){
    console.log("its is alphapet")
}
else if((a1>='A')&&(a1<='Z')){
    console.log("its is alphapet")
}
else{
    console.log("not an alphapet")
}
// find the vowels or consonant
letter="p"
if((letter=='a')||(letter=='e')||(letter=='i')||(letter=='o')||(letter=='u')){
    console.log("vowel")
}
else{
    console.log("consonant")
}
// find out the char type
n=34
if((n>='a')&&(n<='z')){
    console.log("lowercase")
}
else if((n>='A')&&(n<='Z')){
    console.log("uppercase")
}
else if(n>=0){
    console.log("positive number")
}
else if(n<0){
    console.log("negative number")
}
else{
    console.log("special chacracter")
}
// week wise day number
a=5
if(a==1){
    console.log("monday")
}
else if(a==2){
    console.log("tuesday")
}
else if(a==3){
    console.log("wednesday")
}
else if(a==4){
    console.log("thursday")
}
else if(a==5){
    console.log("friday")
}
else if(a==6){
    console.log("saturday")
}
else if(a==7){
    console.log("sunday")
}
else{
    console.log("not a day number")
}
// no of days in particular month
n=13
if((n==1)||(n==3)||(n==5)||(n==7)||(n==8)||(n==10)||(n==12)){
    console.log("31 days")
}
else if((n==4)||(n==6)||(n==9)||(n==11)){
    console.log("30 days")
}
else if(n==2){
    console.log("28 or 29 days")
}
else{
    console.log("not a month")
}
// find triangle or not
t1=60
t2=60
t3=60
s=t1+t2+t3
if(s==180){
    console.log("it is a triangle")
}
else{
    console.log("not a triangle")
}
// equilatral & isoscalar & scalar
a=45
b=45
c=90
s=a+b+c
if(s==180){
    if(a==b==c){
        console.log("Equilatral triangle")
    }
    else if((a==b)||(a==c)||(b==c)){
        console.log("isoscalar triangle")
    }
    else{
        console.log("scalane triangle")
    }
}
else{
    console.log("this ponits not create triangle")
}
// percentage calculator
phy=60
che=90
mat=90
bio=45
com=78
per=((phy+che+mat+bio+com)/500)*100
if(per>=90){
    console.log(per,"Grade A")
}
else if(per>=80){
    console.log(per,"Grade B")
}
else if(per>=70){
    console.log(per,"Grade C")
}
else if(per>=60){
    console.log(per,"Grade D")
}
else if(per>=40){
    console.log(per,"Grade E")
}
else {
    console.log(per,"Grade F")
}
// gross salery 
bs=10000
if(bs<=10000){
    gra=bs*0.2
    da=bs*0.8
    gs=bs+gra+da
    console.log("gross salary",gs)
}
else if(10000<bs>=20000){
    gra=bs*0.25
    da=bs*0.9
    gs=bs+gra+da
    console.log("gross salary",gs)
}
else{
    gra=bs*0.3
    da=bs*0.95
    gs=bs+gra+da
    console.log("gross salary",gs)
}
// electric unit 
eu=170
if(1<=eu>=50){
    a=eu*0.50
    total=a*0.2
    eb=a+total
    console.log("electric unit amount",eb)
}
else if(50<=eu>=150){
    a=eu*0.75
    total=a*0.2
    eb=a+total
    console.log("electric unit amount",eb)
}
else if(150<=eu>=250){
    a=eu*1.20
    total=a*0.2
    eb=a+total
    console.log("electric unit amount",eb)
}
else{
    a=eu*1.50
    total=a*0.2
    eb=a+total
    console.log("electric unit amount",eb)
}
// voting age
a=12
if(n>=18){
    console.log("eligible to vote")
}
else{
    console.log("not eligible to vote")
}
// century find
y=2000
if(y%100==0){
    console.log("this is century")
}
else{
    console.log("not a century year")
}
// pass and fail
m=66
if(50<=m<=100){
    console.log('pass')
}
else{
    console.log('fail')
}
// password validation
// p='nans@8188'
// if(p.length<=8){
//     if((('a'<=p>='z')&&('A'<=p>='Z')&&('0'<=p>='9')&&(p=='@')||(p=='#')||(p=="$")||(p=='%')||(p=='&')||(p=='*')||(p=='(')||(p==')'))){
//         console.log('valid password')
//     }
//     else{
//         console.log('invalid password')
//     }
// }
// else{
//     console.log('invalid password')
// }
// divisible by 5 and 7
a=35
if((a%5==0)&&(a%7==0)){
    console.log('divisible by 5 and 7')
}
else{
    console.log("not divisible by 5 and 7")
}
// profit/loss
selling_price=200
buy_cost=300
if(selling_price>buy_cost){
    console.log('profit')
}
else if(selling_price<buy_cost){
    console.log('loss')
}
else{
    console.log('no loss and no profit')
}


