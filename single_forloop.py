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