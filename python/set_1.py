#create a set
thisset = {"apple","cherry","banana"}
print(thisset)

#duplicate values will be ignored
thisset = {"apple","cherry","banana","apple"}
print(thisset)

#True and 1 are considered the same value
thisset = {"apple","cherry","banana",True,1,2}
print(thisset)

#get the number of items in a set
thisset = {"apple","banana","cherry"}
print(len(thisset))

#set items can be of any data type
#string, int, boolean
set1 = {"apple","banana","cherry"}
set2 = {1,5,7,9,3}
set3 = {True,False,False}

#a set can contain different data types
set1 = {"abc",34,True,40,"male"}

#what is the data type of a set?
myset = {"apple","banana","cherry"}
print(type(myset))

#the set constructor
thisset = set(("apple","banana","cherry"))
print(thisset)