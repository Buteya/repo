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