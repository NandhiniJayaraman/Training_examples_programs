"""calculator program"""
a=int(input('enter first number'))
b=int(input('enter the second number'))
print("1.add||2.sub||3.mul||4.div")
c=input('choose the operation:')
if(c=="1"):
    print(a+b)
elif(c=="2"):
    print(a-b)
elif(c=="3"):
    print(a*b)
elif(c=="4"):
    print(a/b)
else:
    print("your input filed is wrong")
"""---------------------------------------------------------------------------------------------------"""
"""credit number
c='234567898765457'
d=int(c)
if(len(c)<=16):
    if(d>=0):
        print('valid credit number')
    else:
        print('invalid credit number')    
else:
    print('length is not correct')"""

"""temperature/faranhit"""
print("1.celius || 2.faranheit")
ch=input("enter the choice")
a=int(input("enter the temp"))  
if(ch=='1'):
    c=((a-32)*(5/9))
    print('celcius',c)
elif(ch==2):
    c=((a+32)*(9/5))
    print("faranheit",c) 
else:
    print("invalid input")       