message = "Secure123"
shift = 3
encrypted = ""
for char in message:
    if char.isalpha():  
        if char.isupper():
            base = ord('A')
        else:
            base = ord('a')
        shifted = (ord(char) - base + shift) % 26 + base
        encrypted += chr(shifted)
    else:
        encrypted += char
print(encrypted)