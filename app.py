from flask import Flask
from flask import render_template
app = Flask(__name__)


@app.route("/")
def main_page():
    return render_template('main.html')

@app.route("/basket")
def basket_page():
    return render_template('basket.html')
@app.route("/about-us")
def about_us():
    return render_template('about-us.html')

@app.route("/shop")
def book_shop():
    return render_template('book-shop.html')
@app.route("/contacts")
def contacts():
    return render_template('contacts.html')
@app.route("/catalog")
def catalog():
    return render_template('literatury-list.html')
@app.route("/login")
def login():
    return render_template('login-page.html')
@app.route("/reader")
def reader():
    return render_template('rider.html')
@app.route("/sign-in")
def sign_in():
    return render_template('sign-in-page.html')


if __name__ == "__main__":
    app.run(debug=False)