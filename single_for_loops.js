// print number 1 to 2
for(i=1;i<=10;i++){
    console.log(i)
}
// calculate sum of 1 to 100
sum=0
for(i=1;i<=100;i++){
    sum=sum+i
}
console.log(sum)
// even number of 1 to 50
for(i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}
// odd numbers 10 to 30
for(i=10;i<=30;i++){
    if(i%2!=0){
        console.log(i)
    }
}
// multiplies of 3 upto 30
for(i=1;i<=30;i++){
    a=3*i
    console.log(a)
}
//  first 10 square roots
for(i=1;i<=10;i++){
    a=i**2
    console.log(a)
}
// factorial  number
n=5
fact=1
for(i=1;i<=n;i++){
    fact=fact*i
}
console.log(fact)
// fibonacci number
n=5
a=0
b=1
for(i=1;i<=n;i++){
    console.log(a)
    temp=a
    a=b
    b=b+temp
}
// reverse a string
a='nandhini'
for(i=a.length-1;i>=0;i--){
    console.log(a[i])
}
//  vowels and consonant count
s='nandhini'
v_count=0
c_count=0
for(i=0;i<s.length;i++){
    if((a[i]=='a')||(a[i]=='e')||(a[i]=='i')||(a[i]=='o')||(a[i]=='u')){
        v_count+=1
    }
    else{
        c_count+=1
    }
}
console.log("vovwels count:",v_count)
console.log("consonant count:",c_count)
// frequency count
a='amma'
count=0
for(i=0;i<a.length;i++){
    for(j=0;j<a.length;j++){
        if(a[i]==a[j]){
            count++
        }    }
    console.log(a[i],count)
    count=0
}
// smallest prime factor of given number
n=20
temp=[]
min=temp[0]
k=0
for (i=2;i<=n;i++){
    if(i%2!=0){
        temp[k]=i
        k++
    }
}
console.log(temp[0])
// negative number in given list
a=[3,2,-1,4,6,-3,-2]
count=0
for(i=0;i<a.length;i++){
    if(a[i]<0){
        count++
    }
}
console.log("negative number count:",count)
// second smallest element
a=[8,3,9,6,1]
smallest=a[0]
second_smallest=0
for(i=0;i<a.length;i++){
    if(a[i]<smallest){
        second_smallest=smallest
        smallest=a[i]
    }
}
console.log(second_smallest)
// print buzz and fizz
for(i=1;i<=100;i++){
    if(i%3==0){
        console.log("fizz")
    }
    if(i%5==0){
        console.log('buzz')
    }
    if((i%3==0)&&(i%5==0)){
        console.log('fizzbuzz')
    }
}
// add the posibile integer 1000 less and add the 3 and 5 multiplies
for(i=1;i<=1000;i++){
    if(i%3==0 && i%5==0){
        sum=sum+i
    }
}
console.log("positive numeber add value:",sum)
// find each string length
a=['nandhini','raghul','dennis','suriya','viswa']
temp=[]
k=0
for(i=0;i<a.length;i++){
    c=a[i]
    l=c.length
    temp[k]=l
    k++
    console.log(a[i],l)
    c=0
    l=0
}
// find the index number of given number
a=[2,3,4,5,78,9,10]
u=78
for(i=0;i<a.length;i++){
    if(a[i]==u){
        console.log(i,'index of given number')
        break
    }
}
// product of all number
a=[1,4,5,8]
mul=1
for(i=0;i<a.length;i++){
    mul=mul*a[i]
}
console.log(mul)
// print all leap year of given years
start_year=1000
end_year=2000
for(i=start_year;i<=end_year;i++){
    if((i%4==0)&&(i%100!=0)||(i%400==0)){
        console.log(i)
    }
} 
// count the each charecter
n='this is w3resource.com'
a=0
n1=0
s=0
s1=0
for(i=0;i<n.length;i++){
    if(0<=n[i]>=9){
        n1++
    }
    if((n[i]==['a-z'])||(n[i]==['A-Z'])){
        a++
    }
    if(n[i]==''){
        s++
    }
    else{
        s1++
    }
}
// comapre two numbers
n=25
m=45
if(n==n1){
    console.log("twio number are equal")
}
else if(n!=m){
    console.log("not equal ")
}
if(n>m){
    console.log('n is larger number')
}
 if(m>n){
    console.log("m is larger number")
}
// power of any number using loops
base=4
expo=3
temp=base
for(i=0;i<expo;i++){
    temp=temp*base
}
console.log(temp)
// find the factors of given number
n=63
for(i=0;i<=n;i++){
    if(n%i==0){
        console.log('factors',i)
    }
}
// first and last charactor
n=[5,6,7,8]
first=n[0]
last=n[n.length-1]
console.log('first element',first)
console.log('second element',last)
