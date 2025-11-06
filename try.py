# --- ফাইল: my_math.py (এটি একটি মডিউল) ---
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

PI = 3.1416

# --- ফাইল: main.py (অন্য একটি ফাইল) ---
import my_math # সম্পূর্ণ মডিউল ইম্পোর্ট করা

print(my_math.add(10, 5)) # 15
print(my_math.PI) # 3.1416

# শুধু নির্দিষ্ট ফাংশন ইম্পোর্ট করা
from my_math import subtract

print(subtract(10, 5)) # 5