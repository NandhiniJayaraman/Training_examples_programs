# two strings are anagrams
'''def anagram(s1,s2):
    s1.sort()
    s2.sort()
    if(s1==s2):
        print('anagrams')
    else:
        print('not anagrams')
anagram(['god'],['dog']) 
# sum og digit
def sum(n):
    while n>0:
        sum=0
        s=n%10
        sum=sum+s
        n=n//10
        return sum
print(sum(1234))  
# median of list of numbers
def median(list):
    list.sort()
    a=len(list)
    if(a%2==0):
        print((list[a/2]+list[(a/2)+1]/2))
    else:
        print(list[a/2]) 

median([2,4,3,5,6,7,8])   
# given is digit
def isdigit(a):
    c=1234567890
    b=str(a)
    for i in b:
        e=int(i)
        if e in c:
            print('only digit')
        else:
            print('not a digit')    

isdigit(12345)
# decimal to binary
def dtb(n):
    str1=''
    while (n>0):
        c=n%2
        str1=str1+str(c)
        n=n//10
    return str[::-1]
print(dtb(23))'''
# area of triangle of three sides
import math
def semi_area(a,b,c):
    s=((a+b+c)/2)
    c=math.sqrt(s*(s-a)*(s-b)*(s-c))
    return c
print(semi_area(7,8,3))
# list of integer convert to single integer
def single_integer(list):
    for i in list:
        print(i,end='')
single_integer([2,3,4,5])  
#   
    
