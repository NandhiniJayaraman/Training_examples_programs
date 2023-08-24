# two strings are anagrams
def anagram(s1,s2):
    s1.sort()
    s2.sort()
    if(s1==s2):
        print('anagrams')
    else:
        print('not anagrams')
anagram(['god'],['dog'])