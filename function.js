// add two numbers
function sum(a,b){
    c=a+b
    return c
}
console.log(sum(4,5))
// factorial
function fact(n){
    sum=1
    for(i=1;i<=n;i++){
        sum=sum*i
    }
    return sum
}
console.log(fact(5))
// even / odd function
function iseven(n){
    found=false
    if(n%2==0){
        found=true
    }
    return found
}
if(iseven(6)==false){
    console.log('odd')
}
else{
    console.log('even')
}
// find the max
function max(b){
    // console.log(b,'input')
    m=b[0]
    for(i=1;i<b.length;i++){
        if(m<b[i]){
            m=b[i]
        }
    }
    return m
}
console.log(max([2,3,4,5,6,7]))
// reverse the string / palindrome
function reverse(a){
    str=''
    for(i=a.length-1;i>=0;i--){
        str=str+a[i]
    }
    return str
}
b="nandhini"
console.log(reverse(b))
if(reverse(b)==b){
    console.log('it is a palindrome')
}
else{
    console.log('not a palindrome')
}
// reverse the number
function rever(a){
    temp=[]
    k=0
    for(i=a.length-1;i>=0;i--){
        temp[k]==a[i]
        k++
    }
    return temp
}
console.log(rever([2,5,4,3]))
// area of circle
function area(r){
    a=((3.14)*(r**2))
    return a
}
console.log(area(3))
// average calculate
function avg(list){
    sum=0
    for(i=0;i<list.length;i++){
        sum=sum+list[i]
    }
    average=sum/list.length
    return average
}
console.log(avg([2,3,4,5,6]))
// prime or not
function isprime(a){
    found=false
    for(i=2;i<=2;i++){
        if(a%i==0){
            found=true
            break
        }
    }
    return found
}
if(isprime(5)==false){
    console.log('prime')
}
else{
    console.log('not prime')
}
// celcius
function celsius(n){
    f=((n*(9/5)+32))
    return f
}
console.log(celsius(72))
// vowels
function vowels(a){
    count=0
    for(i=0;i<a.length;i++){
        if(a[i]=='a' || a[i]=='e' || a[i]=='i' || a[i]=='o' || a[i]=='u'){
            count++
        }
    }
    return count
}
console.log(vowels('nandhini'))
// ascending order
function asc(list){
    found=true
    for(i=0;i<list.length;i++){
        if(a[i]>a[i+1]){
            found=false
            break
        }
    }
    return found
}
a=[4,3,5,2,6]
console.log(a)
console.log(asc(a))
if(asc(a)==true){
    console.log('ascending order')
}
else{
    console.log('not a ascending order')
}
// expononent
function expo(n,p){
    c=1
    for(i=1;i<=p;i++){
        c=c*n
    }
    return c
}
console.log(expo(7,3))
// smallest number in a list
function smallest(list){
    min=list[0]
    for(i=0;i<list.length;i++){
        if(min>list[i]){
            min=list[i]
}
}
return min
}
console.log(smallest([2,4,56,4,3,45,67,1]))
// validate the email
function email(mail){
    b='@gmail.com'
    count=0
    k=mail.length-1
    for(i=mail.length-1;i<=0;i--){
        if(mail[i]!=b[k]){
            console.log('not match')
        }
        else{
            console.log('match')
        }
    }

}
console.log(email('nandhini@gmail.com'))
// fibonacci series
function fibo(n){
    a=0
    b=1
    for(i=0;i<=n;i++){
        console.log(a)
        c=a+b
        a=b
        b=c
    }
}
console.log(fibo(5))
// unique number in given list
function unique(list){
    temp=[]
    k=0
    count=0
    for(i=0;i<list.length;i++){
        for(j=0;j<i;j++){
            if(list[i]!=temp[i]){
                count++
            }
        }
            if(count==0){
                temp[k]=list[i]
                k++
            }
        }
    return temp
}
console.log(unique([7,8,9,7,4,3,9,8]))
// area of triangle
function tri(b,h){
    a=((1/2)*b*h)
    return a
}
console.log(tri(8,4))
// second largest number
function second(list){
    largest=list[0]
    second_largest=0
    for(i=0;i<list.length;i++){
        if(list[i]>largest){
            second_largest=largest
            largest=list[i]
        }
    }
    return second_largest
}
console.log(second([2,8,9,34,54,87]))
// volume of sphere
function vol(r){
    v=((4/3)*3.14*(r**3))
    return v
}
console.log(vol(7))