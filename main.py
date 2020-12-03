from flask import Flask, render_template, request, json, jsonify, redirect
import json
file_name = 'static/jsonData/fileJson.json'
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/cars')
def cars():
    return render_template('cars.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/auto')
def auto():
    return render_template('auto.html')

@app.route('/panel')
def panel():
    return render_template('panel.html')


@app.route('/noma')
def noma():
    return render_template('noma.html')

@app.route('/newauto')
def newauto():
    return render_template('newauto.html')

def jsonRead():
    try:
        with open(file_name, 'r') as f:
           return json.load(f)
    except:
        create()
    

def jsonWrite(data):
    with open(file_name, 'w') as f:
        json.dump(data, f, indent=4)
    return jsonRead()

def create():
    with open(file_name, 'w') as f:
       json.dump({
           'USERS' : [] 
       }, f, indent=4)

    return jsonRead()
jsonRead()

@app.route('/getData', methods = ["POST", "GET"])
def getData():

    data = request.json
    db = jsonRead()
    db['USERS'].append(data)
    jsonWrite(db)
    return 'send!'

@app.route('/showData', methods = ["POST", "GET"])
def showData():
    return jsonRead()


if __name__ == '__main__':
  app.run(debug=True) 