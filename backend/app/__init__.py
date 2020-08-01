from flask import Flask, jsonify
from flask import request
from app.controller import Controller
import sys
import os
app = Flask(__name__)


contr = Controller()

@app.route("/", methods=['GET'])
def main():
    return "Welcome!\nTry to POST to the URL '/api/login' with postman"

@app.route("/api/login", methods=['POST'])
def login():
    data = request.args
    response = contr.login(data)
    return response

