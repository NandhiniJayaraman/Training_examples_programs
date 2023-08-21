"""calculator program"""
a=int(input('enter first number'))
b=int(input('enter the second number'))
c=input('choose the operation:')
if(c=="add"):
    print(a+b)
elif(c=="sub"):
    print(a-b)
elif(c=="mul"):
    print(a*b)
elif(c=="div"):
    print(a/b)
else:
    print("your input filed is wrong")
