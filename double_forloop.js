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
  