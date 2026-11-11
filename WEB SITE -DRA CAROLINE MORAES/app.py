from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/status", methods=["GET"])
def status():
    return jsonify({
        "clinica": "Dra. Caroline Moraes",
        "sistema": "Atendimento odontológico",
        "status": "online"
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)