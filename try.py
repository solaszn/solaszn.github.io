download = input("No. of installs: ")
ratings = input("No. of ratings: ")
unrated = int(download) - int(ratings)
percent = int(unrated)/int(download) * 100
print(percent, "%")


# Codewars Kata - Cartesia 10 minute walk
def is_valid_walk(walk):
    if len(walk)==10:
        #determine if walk is valid
        # create a 21*21 matrix 
        map=[]
        i=0
        for r in range(21):
            row=[]
            for c in range(21):
                i+=1
                row.append(i)
            map.append(row)
        # Assign middle of the matrix as start point
        #pointer = map[11][11]
        r=c=11
        n=e=1
        s=w=-1
        for step in walk:
            if step == 'n':
                c+=n
            elif step == 's':
                c+=s
            elif step == 'e':
                r+=e
            else:
                r+=w
        return map[11][11] == map[r][c]
    return False