#tuples
thistuple = ("apple", "banana", "cherry")
print(thistuple)

#allows duplicate values
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)

#tuple length
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))

#tuple with one item
thistuple = ("apple",)
print(type(thistuple))

#tuple data types
tuple1 = ("apple", "banana", "cherry")
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, False)

#can have different types
tuple1 = ("abc", 34, True, 40, "male")

#the class type
mytuple = ("apple", "banana", "cherry")
print(type(mytuple))

#using the constructor
thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)

#access tuples
#using the index
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])

#starting from the end
#the last item
thistuple = ("apple", "banana", "cherry")
print(thistuple[-1])

#range of indexes
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5])

#returnings items from the beginning
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[:4])

#returning items from a specific index
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:])

#starting range from the back
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[-4:-1])

#check if item exists
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")