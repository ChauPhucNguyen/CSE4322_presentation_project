import time
from flask import Flask

app = Flask(__name__)

# Descriptive Satistic Functions
@app.route('/median', methods=['GET','POST'])
def get_median():
    return {'median': 10}

@app.route('/descriptivestats', methods=['GET','POST'])
def get_current_time():
    return {'time': time.time()}


if __name__ == "__main__":
    app.run(debug=True)