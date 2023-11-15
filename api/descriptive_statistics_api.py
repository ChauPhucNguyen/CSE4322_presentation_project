import time
import numpy as np
from scipy import stats
from flask import Flask, send_from_directory,request, jsonify
from flask_cors import CORS, cross_origin
import statistics

app = Flask(__name__,static_folder='../build', static_url_path='')
CORS(app)

@app.route('/mean', methods=['POST'])
@cross_origin()
def get_mean():
    data = request.get_json()
    mean = np.mean(data)
    return jsonify(mean)

@app.route('/median', methods=['POST'])
@cross_origin()
def get_median():
    data = request.get_json()
    median = np.median(data)
    return jsonify(median)

@app.route('/mode', methods=['POST'])
@cross_origin()
def get_mode():
    data = request.get_json()
    mode = stats.mode(data)
    return jsonify(statistics.mode(data))

@app.route('/range', methods=['POST'])
@cross_origin()
def get_range():
    data = request.get_json()
    range_ = np.max(data)
    return jsonify(range_)

@app.route('/variance', methods=['POST'])
@cross_origin()
def get_variance():
    data = request.get_json()
    variance = np.var(data)
    return jsonify(variance)

@app.route('/sample_variance', methods=['POST'])
@cross_origin()
def get_sample_variance():
    data = request.get_json()
    sample_variance = np.var(data, ddof=1)
    return jsonify(sample_variance)

@app.route('/standard_deviation', methods=['POST'])
@cross_origin()
def get_standard_deviation():
    data = request.get_json()
    standard_deviation = np.std(data)
    return jsonify(standard_deviation)

@app.route('/coefficient_of_variation', methods=['POST'])
@cross_origin()
def get_coefficient_of_variation():
    data = request.get_json()
    coefficient_of_variation = stats.variation(data)
    return jsonify(coefficient_of_variation)

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)
