# right triangle pattern using number
for i in range(1,6):
    for j in range(1,i+1):
        print(j,end='')
    print('')  
# right triangle pattern using number
for i in range(1,6):
    for j in range(1,i+1):
        print(i,end='')
    print('')  
# right triangle pattern increased by 1
k=1
for i in range(1,5):
    for j in range(i):
        print(k,end='')
        k+=1
    print('') 
# pyramid pattern
n=5
for i in range(1,n):
    for j in range(0,n-1):
        print(' ',end='')
    for k in range(1,i+1):
        print('*',end=' ')
    print(' ')