mylist = ["apple", "banana", "cherry"]

thislist = ["apple", "banana", "cherry"]
print(thislist)

thislist = ["apple", "banana", "cherry", "apple", "cherry"]
print(thislist)

thislist = ["apple", "banana", "cherry"]
print(len(thislist))

list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]

list1 = ["abc", 34, True, 40, "male"]

mylist = ["apple", "banana", "cherry"]
print(type(mylist))

thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(thislist)

#access list item
thislist = ["apple", "banana", "cherry"]
print(thislist[1])

#negative list item 
thislist = ["apple", "banana", "cherry"]
print(thislist[-1])

#range items
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:4])

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])

#check if item exists
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list")

#change item value
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)

#change range of items
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)

thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist)

thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist)

#change itmes
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)

#append items
thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)

#insert items
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist)

#extend list
thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist)

#add any iterable
thislist = ["apple", "banana", "cherry"]
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
print(thislist)

#remove specified item
thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)

#remove specified index
thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist)

#remove the last item
thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist)

#remove specified index
thislist = ["apple", "banana", "cherry"]
del thislist[0]
print(thislist)

#delete the entire list
thislist = ["apple", "banana", "cherry"]
del thislist

#clear the list
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist)

#looping through list
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)
  
#loop through the index numbers
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])

#using a while loop
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1

#looping using list compression
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]