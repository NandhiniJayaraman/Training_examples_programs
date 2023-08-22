"""lenth of string"""
a='finstein'
count=0
for i in a:
    count+=1
print(count)
# remove all duplicates
a=[1,2,3,4,3,4,5]
for i in a:
    if(a.count(i)>1):
        a.remove(i)
print(a)
# start with vowels
a=['apple','mango','ice-creams','egg','pen']
count=0
for i in range(len(a)):
    c=a[i]
    if((c[0]=='a') or (c[0]=='e') or(c[0]=='i') or(c[0]=='o') or(c[0]=='u') ):
        # print(a[i],'start alphapet') 
        count+=1
print(count)  
 # sum of given integer 
n=255
n1=str(n)
sum=0
for i in n1:
    # d=n%10
    sum=sum+int(i)
print(sum)
# ascii character
for i in range(65,76):
    print(i,chr(i))
# product of each number
n=255
n1=str(n)
mul=1
for i in n1:
    # d=n%10
    mul=mul*int(i)
print(mul)