import * as d3 from "d3";

class BaseChart{

  constructor(element, props, data) {
    this._element = element;
    this._props = props;
    this._data = data;
  }

  draw() {
    let container = d3.select(this._element);

    container
      .append('p')
      .text(this._element);
  }

}

export default BaseChart;
