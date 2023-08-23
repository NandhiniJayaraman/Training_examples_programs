// two array check element are overlap or not
a=[8,9,10,11,12]
b=[4,5,6,7,8,9]
found=false
count=0
for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]==b[j]){
            found=true
            count++
        }
    }
}
console.log('number of overlap number:',count)
if(found=true){
    console.log("elements are over lap")
}
else{
    console.log('not overlap')
}
// sort the list
n=[7,22,12,29,17,42]
k=0
for(i=0;i<n.length;i++){
    min=n[i]
    for(j=i+1;j<n.length;j++){
        if(min>n[j]){
            min=n[j]
            k=j
        }
    }
    if(i!=k){
        temp=n[i]
        n[i]=n[k]
        n[k]=temp
    }
}
console.log('sorted list',n)
// right angle triangle
for(i=0;i<=5;i++){
    c=' '
    for(j=0;j<i;j++){
        c=c+'*'
    }
    console.log(c)
}
// sqaure pattern
for (i=1;i<= 4;i++){
        s=" "
     for (j=1;j<=4;j++)
          {
            s = s + "*"
          }
      console.log(s)           
   }
// non-prime findout outof 25
np=0
n=25
for(i=2;i<=25;i++){
    for(j=2;j<i;j++){
        if(i%j==0){
            np=np+i
            break
        }
    }
}
// calculate the series
sum=0
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        sum=sum+j
    }
    console.log(i,sum)
}
console.log(sum)
// multiplication table 1 to 5
n=5
for(i=1;i<=5;i++){
    for(j=1;j<=10;j++){
        c=i*j
        console.log(i,'*',j,'=',c)
    }
}
// display and ad dthe series
n=0
for(i=1;i<=5;i++){
    c=10**i
    console.log(c-1)
    n=(c-1)+n
}
console.log('add the value of series',n)
// display and add the series
sum=0
temp=0
for(i=1;i<=5;i++){
    temp=(temp*10)+1
    sum=sum+temp
}
console.log(sum)
// 100 to 200
for(i=100;i<=200;i++){
    if(i%9==0){
        console.log(i)
        sum=sum+i
    }
}
console.log(sum)
// lcm and hcf
first=15
second=25
if(first>second){
    smallest=second
}
else{
    smallest=first
}
for(i=1;i<smallest;i++){
    if(first%i==0 && second%i==0){
        console.log(i)
        hcf=i
        lcm=((first*second)/hcf)
    }
}
console.log('hcf',hcf)
console.log('lcm',lcm)
// A>P series
a=1
n=3
d=2
sum=0 
for(i=a,j=1;j<=n;i+=d,j++){

sum=sum+i
}  
console.log(sum)
// G.P series
a=1
n=3
d=2
s=0 
for(i=1;i<=n;i++){
    a=a*d
    s=s+a
    console.log(a)
}
console.log(s)
// A.P series
a=1
n=3
d=2
s=0 
for(i=1;i<=n;i++){
    a=a+d
    s=s+a
    console.log(a)
}
console.log(s)
// express as sum of prime number
n=20
s=0
for(i=2;i<=n;i++){
    if(n%i==0){
        s=s+i
    }
}
console.log('sum of prime number',s)
