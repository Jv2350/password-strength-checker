from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import re
import math
import hashlib

app = FastAPI()

# cors (for local)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Password(BaseModel):
    password: str


# entropy calculation 
def password_entropy(pw):
    charset = 0

    if re.search(r"[a-z]", pw):
        charset += 26
    if re.search(r"[A-Z]", pw):
        charset += 26
    if re.search(r"[0-9]", pw):
        charset += 10
    if re.search(r"[!@#$%^&*]", pw):
        charset += 10

    if charset == 0:
        return 0

    entropy = len(pw) * math.log2(charset)
    return round(entropy, 2)


# breach detection (very basic, just for demo)
COMMON_HASHES = [
    hashlib.sha1("password".encode()).hexdigest(),
    hashlib.sha1("123456".encode()).hexdigest(),
]

def breached_check(pw):
    h = hashlib.sha1(pw.encode()).hexdigest()
    return h in COMMON_HASHES


# convert entropy to level
def calculate_level(entropy):
    if entropy < 28:
        return "Weak"
    elif entropy < 50:
        return "Medium"
    else:
        return "Strong"

def time_to_crack(entropy):
    # assume attacker tries 1 billion guesses/sec
    guesses_per_second = 1_000_000_000

    seconds = (2 ** entropy) / guesses_per_second if entropy > 0 else 0

    if seconds < 60:
        return f"{round(seconds,2)} seconds"
    elif seconds < 3600:
        return f"{round(seconds/60,2)} minutes"
    elif seconds < 86400:
        return f"{round(seconds/3600,2)} hours"
    elif seconds < 31536000:
        return f"{round(seconds/86400,2)} days"
    else:
        return f"{round(seconds/31536000,2)} years"


@app.post("/api/check")
def check_password(data: Password):
    entropy = password_entropy(data.password)
    breached = breached_check(data.password)
    level = calculate_level(entropy)
    crack_time = time_to_crack(entropy)

    return {
        "entropy": entropy,
        "level": level,
        "breached": breached,
        "crack_time": crack_time
    }