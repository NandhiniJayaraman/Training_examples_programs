// overlap rectangular
x1=2
x2=4
x3=3
x4=5
y1=4
y2=2
y3=3
y4=5
if((x1!=x2)&&(y1!=y2)){
    if(((x1<=x3>=x2)&&(y1>=y3>=y2))||((x1>=x3<=x2)&&(y1<=y3<=y2))){
        console.log('overlap')
    }
    else if(((x1<=x4>=x2)&&(y1>=y4>=y2))||((x1>=x4<=x2)&&(y1<=y4<=y2))){
        console.log('overlap')
    }
    else{
        print('not overlap')
    }
    // 









}
else{
    console.log("not a rectangular")
}