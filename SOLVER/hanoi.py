## The theory behind it is absolutely crazy,read the documentation
## source,destination,spare
def hanoi(n,src,dest,spr):
    if n==1:
        print(src+"->"+dest)
    else:
        hanoi(n-1,src,spr,dest)
        hanoi(1,src,dest,spr)
        hanoi(n-1,spr,dest,src)
for i in range(1,6):
    print("HANOI",i)
    hanoi(i,"A","B","C")  
    print('----------')
