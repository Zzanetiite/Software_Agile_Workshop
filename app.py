from flask import Flask

app = Flask(__name__)

@app.rout("/")
def hello_world():
    return "<h1>Hello World</>"