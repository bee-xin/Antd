def apply_operation(func, value):
    return func(value)

def square(num):
    return num*4

result = apply_operation(square, 4)
print(result)  # Expected output: 16
