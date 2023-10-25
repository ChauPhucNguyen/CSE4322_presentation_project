import { HistogramChart } from "@carbon/charts-react";
import "@carbon/charts-react/styles.css";

const options = {
  title: "Histogram",
  axes: {
    bottom: {
      title: "Value",
      mapsTo: "val",
      bins: 10,
      limitDomainToBins: true,
    },
    left: {
      title: "Frequency",
      scaleType: "linear",
      stacked: true,
      binned: true,
    },
  },
  height: "400px",
  color: {
    pairing: {
      option: 1,
    },
    scale: {
      number: "#22885C",
    },
  },
};

const Histogram = (arr) => {
  const data = [];

  for (let val of arr) {
    if (isNaN(val) || val < 0) continue;
    data.push({ group: "number", val: val });
  }

  return data.length ? <HistogramChart data={data} options={options} /> : null;
};

export default Histogram;
