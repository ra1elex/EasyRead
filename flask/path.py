from flask import Flask
app = Flask(__name__)

@app.route("/example")

def index():
    return "hel"

if __name__ == "__main__":
    app.run