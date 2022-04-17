from flask import (Blueprint, flash, g, redirect, render_template, request, url_for)
import json

bp = Blueprint('home', __name__)

with open('./asl/static/quiz.json') as json_file:
    quiz_data = json.load(json_file)

@bp.route('/', methods=["GET"])
def index():
    return render_template('home.html')

@bp.route('/greetings', methods=["GET"])
def greeting():
    return render_template('greetings.html')

@bp.route('/manners', methods=["GET"])
def manner():
    return render_template('manners.html')

@bp.route('/learning', methods=["GET"])
def learning():
    return render_template('learning.html')

@bp.route('/farewell', methods=["GET"])
def farewell():
    return render_template('farewell.html')

# quiz starting page
@bp.route('/quiz', methods=["GET"])
def quiz():
    return render_template('quiz.html')

# quiz question page
@bp.route('/question/<id>')
def question(id=None):
    # get to correct quiz question
    return render_template('question.html', quiz_data=quiz_data, id=id)

