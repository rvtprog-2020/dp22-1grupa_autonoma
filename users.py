from flask import json, jsonify

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


@app.route('/getData', methods = ["POST", "GET"])
def getData():

    data = request.json
    db = jsonRead()
    db['USERS'].append(data)
    jsonWrite(db)
    return 'send!'

@app.route('/')
def home():
    return render_template('send.html')

if __name__ == '__main__':
  app.run(debug=True) 