import time
from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin


app = Flask(__name__,static_folder='../build', static_url_path='')
CORS(app)

# Descriptive Satistic Functions
@app.route('/median', methods=['GET','POST'])
@cross_origin()
def get_median():
    return {'median': 10}

@app.route('/descriptivestats', methods=['GET','POST'])
@cross_origin()
def get_current_time():
    return {'time': time.time()}

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')
if __name__ == "__main__":
    app.run(debug=True)