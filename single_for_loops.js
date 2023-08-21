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
// 