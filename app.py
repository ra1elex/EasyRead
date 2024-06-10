from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("main.html")
@app.route('/basket')
def basket():
    return render_template("basket.html")
@app.route('/about-us')
def about_us():
    return render_template("about-us.html")
@app.route('/shop')
def shop():
    return render_template("book-shop.html")
@app.route('/contacts')
def contacts():
    return render_template("contacts.html")
@app.route('/favourites')
def favorite():
    return render_template("favourites.html")
@app.route('/login')
def login():
    return render_template("login-page.html")
@app.route('/make-order')
def make_oreder():
    return render_template("making-orders.html")
@app.route('/reader')
def reader():
    return render_template("rider.html")
@app.route('/sign-in')
def sign_in():
    return render_template("sign-in-page.html")
@app.route('/liter-list')
def book_list():
    return render_template("literatury-list.html")

if __name__=="__main__":
    app.run(debug=True)