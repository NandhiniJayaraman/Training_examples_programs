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
// reverse the string
function reverse(a){
    str=''
    for(i=a.length-1;i>=0;i--){
        str=str+a[i]
    }
    return str
}
console.log(reverse('nans'))