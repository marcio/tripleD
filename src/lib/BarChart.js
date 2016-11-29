import * as d3 from 'd3';
import BaseChart from './BaseChart';

class BarChart extends BaseChart{

  constructor(element, props, data) {
    super(element, props, data);

    this.container = this.getD3Container();
  }

  draw() {
    this.drawContainer(this.container);
  }


}

export default BarChart;
