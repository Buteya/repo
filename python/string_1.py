print("Hello")
print('Hello')

a = "Hello"
print(a)

a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(a)

a = "Hello, World!"
print(a[1])

for x in "banana":
    print(x)

a = "Hello, World!"
print(len(a))

txt = "The best things in life are free!"
print("free" in txt)

txt = "The best things in life are free!"
if "free" in txt:
    print("Yes, 'free' is present")

txt = "The best things in life are free!"
print("expensive" not in txt)

txt = "The best things in life are free!"
if "expensive" not in txt:
    print("No, 'expensive' is not present")

# Slicing
b = "Hello, world!"
print(b[2:5])

# Slice from the start
b = "Hello, world!"
print(b[:5])

# Slice to the end
b = "Hello, world!"
print(b[2:])

# Negative indexing
b = "Hello, world!"
print(b[-5:-2])

# Modify strings
a = "Hello, world!"
print(a.upper())

a = "Hello, world!"
print(a.lower())

a = "Hello, world!"
print(a.strip())

a = "Hello, world!"
print(a.replace("H","J"))

a = "Hello, world!"
print(a.split())
