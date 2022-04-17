from flask import (Blueprint, Flask, flash, g, redirect, render_template, request, url_for, json)
import os

bp = Blueprint('home', __name__)
app = Flask(__name__)

@bp.route('/', methods=["GET"])
def index():
    return render_template('home.html')

@bp.route('/greetings/<videoId>', methods=["GET"])
def greeting(videoId):
    with open('./asl/static/learning.json') as json_file:
        data = json.load(json_file)
        lesson = {}
        for item in data:
            if item['videoId'] == int(videoId):
                lesson[item['videoId']] = item
    return render_template('greetings.html', lesson=lesson)

@bp.route('/manners/<videoId>', methods=["GET"])
def manner(videoId):
    with open('./asl/static/learning.json') as json_file:
        data = json.load(json_file)
        lesson = {}
        for item in data:
            if item['videoId'] == int(videoId):
                lesson[item['videoId']] = item
    return render_template('manners.html', lesson=lesson)

@bp.route('/learning/<videoId>', methods=["GET"])
def learning(videoId):
    with open('./asl/static/learning.json') as json_file:
        data = json.load(json_file)
        lesson = {}
        for item in data:
            if item['videoId'] == int(videoId):
                lesson[item['videoId']] = item
    return render_template('learning.html', lesson=lesson)

@bp.route('/farewell/<videoId>', methods=["GET"])
def farewell(videoId):
    with open('./asl/static/learning.json') as json_file:
        data = json.load(json_file)
        lesson = {}
        for item in data:
            if item['videoId'] == int(videoId):
                lesson[item['videoId']] = item
    return render_template('farewell.html', lesson=lesson)

@bp.route('/quiz', methods=["GET"])
def quiz():
    return render_template('quiz.html')

"""
@bp.route('/greetings/<videoid>', methods=["GET"])
def greeting_lesson(videoid):
    return render_template('greetings.html', id=id)
"""