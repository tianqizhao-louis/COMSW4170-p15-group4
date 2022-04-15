from flask import (Blueprint, flash, g, redirect, render_template, request, url_for)

bp = Blueprint('home', __name__)


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

@bp.route('/quiz', methods=["GET"])
def quiz():
    return render_template('quiz.html')

