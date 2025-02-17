from flask import Flask, request, jsonify, render_template
from flask.helpers import send_file

app = Flask(__name__, static_url_path='/', static_folder='web')

@app.route("/")
def indexPage():
    return send_file("web/index.html")

