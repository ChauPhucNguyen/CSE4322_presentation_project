import time
from flask import Flask, send_from_directory,request
from flask_cors import CORS, cross_origin


app = Flask(__name__,static_folder='./build', static_url_path='')
CORS(app)

# Descriptive Satistic Functions

@app.route('/descriptivestats', methods=['GET','POST'])
@cross_origin()
def get_current_time():
    return {'time': time.time()}

@app.route("/array_post",methods=['GET','POST'])
@cross_origin
def array_post():
  if request.method=='POST':
    a=request.form.getlist("contacts[]")
    for x in a:
      print(x)
  return ""

# Population Median
@app.route('/median', methods=['GET','POST'])
@cross_origin()
def get_median():
    return {'median': 10}

# Arithmetic Mean
@app.route('/mean', methods=['GET','POST'])
@cross_origin()
def get_median():
    return {'median': 10}

# Mode
@app.route('/mean', methods=['GET','POST'])
@cross_origin()
def get_median():
    return {'median': 10}

# Sample Range
@app.route('/mean', methods=['GET','POST'])
@cross_origin()
def get_median():
    return {'median': 10}

# Population Variance
@app.route('/mean', methods=['GET','POST'])
@cross_origin()
def get_median():
    return {'median': 10}

# Standard Deviation
@app.route('/mean', methods=['GET','POST'])
@cross_origin()
def get_median():
    return {'median': 10}



@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')




# Quartiles
# Extras 
# Weighted Arithmetic Mean (Maybe not based on Design)

# Geometric Mean (Same as before)




if __name__ == "__main__":
    app.run(debug=True)