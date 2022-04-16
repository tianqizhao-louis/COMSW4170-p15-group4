from flask import (Blueprint, Flask, flash, g, redirect, render_template, request, url_for, json)
import os

bp = Blueprint('home', __name__)
app = Flask(__name__)

@bp.route('/', methods=["GET"])
def index():
    return render_template('home.html')

@bp.route('/greetings', methods=["GET"])
def greeting():
    with open('./asl/static/learning.json') as json_file:
        data = json.load(json_file)
        lesson = {}
        for item in data:
            lesson[item['videoId']] = item
    return render_template('greetings.html', lesson=lesson)

@bp.route('/manners', methods=["GET"])
def manner():
    return render_template('manners.html')

@bp.route('/learning', methods=["GET"])
def learning():
    return render_template('learning.html')

@bp.route('/farewell', methods=["GET"])
def farewell():
    return render_template('farewell.html')

@bp.route('/quiz', methods=["GET"])
def quiz():
    return render_template('quiz.html')

"""
@bp.route('/greetings/<videoid>', methods=["GET"])
def greeting_lesson(videoid):
    return render_template('greetings.html', id=id)
"""