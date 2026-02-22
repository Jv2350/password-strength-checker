from fastapi import FastAPI
from pydantic import BaseModel
import re

app = FastAPI()

class Password(BaseModel):
    password: str

def calculate_strength(pw):
    score = 0
    if len(pw) >= 8:
        score += 1
    if re.search(r"[A-Z]", pw):
        score += 1
    if re.search(r"[0-9]", pw):
        score += 1
    if re.search(r"[!@#$%^&*]", pw):
        score += 1
    return score

@app.post("/api/check")
def check_password(data: Password):
    strength = calculate_strength(data.password)

    level = "Weak"
    if strength >= 2:
        level = "Medium"
    if strength == 4:
        level = "Strong"

    return {"score": strength, "level": level}