from pydantic import BaseModel
import uvicorn
from fastapi import FastAPI

app = FastAPI()

# Define users as a list of dictionaries, each representing a user
users = [
    { 'id': 1, 'name': 'John', 'age': 25 },
    { 'id': 2, 'name': 'Jane', 'age': 22 },
    { 'id': 3, 'name': 'Alice', 'age': 27 }
]

# Pydantic model for user authentication/semantics/validation
class User(BaseModel):
    name: str
    age: int
    
@app.get("/users")
def get_users():
    return users

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5000)

#docerise the API for the user to understand the API