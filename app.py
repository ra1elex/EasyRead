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
@app.route('/sign-in')
def sign_in():
    return render_template("sign-in-page.html")
@app.route('/make-order')
def make_oreder():
    return render_template("making-orders.html")
@app.route('/sign-up')
def sign_up():
    return render_template("sign-up.html")
@app.route('/liter-list')
def book_list():
    return render_template("literatury-list.html")

@app.route('/reader-Anne-Dar')
def reader_AD():
    return render_template("rider-Anne-Dar.html")
@app.route('/reader-beautiful-witch')
def reader_BWT():
    return render_template("rider-beautiful-witch.html")
@app.route('/reader-berta-isla')
def reader_BI():
    return render_template("rider-berta-isla.html")
@app.route('/reader-dragon-general')
def reader_DG():
    return render_template("rider-dragon-general.html")
@app.route('/reader-language-of-bones')
def reader_LOB():
    return render_template("rider-language-of-bones.html")
@app.route('/reader-murders-and-cupcakes')
def reader_MAC():
    return render_template("rider-murders-and-cupcakes.html")
@app.route('/reader-personal-student')
def reader_PS():
    return render_template("rider-personal-student.html")
@app.route('/reader-reality-transurfing')
def reader_RRT():
    return render_template("rider-reality-transurfing.html")

if __name__=="__main__":
    app.run(debug=True)