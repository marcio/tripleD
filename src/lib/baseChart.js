import * as d3 from 'd3';
import _merge from 'lodash/merge';
import Default from './Defaults';

const DEFAULTS = new Default();

class BaseChart{

  constructor(element, props, data) {
    this._element = element;
    this._data = data;
    this._props = this.resolveProps(props);
  }

  resolveProps(props = {}) {
    return _merge(DEFAULTS.props, props);
  }

  getD3Container() {
    return d3.select(this._element);
  }

  getData() {
    return this._data;
  }

  drawContainer(container) {

    const { width, height } = this._props.size;
    const { left, right, top, bottom } = this._props.margins;
    let realWidth = width - left - right;
    let realHeight = height - top - bottom;

    container
      .append('svg')
      .attr('width', realWidth + left + right)
      .attr('height', realHeight + top + bottom)
      .call(this.responsivefy)
      .append('g')
      .attr('transform', `translate(${left}, ${top})`);



  }

  responsivefy(svg) {

    let container = d3.select(svg.node().parentNode);
    let width = parseInt(svg.style('width'));
    let height = parseInt(svg.style('height'));
    let aspect = width / height;

    svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMid')
      .call(resize);

    d3.select(window).on(`resize.${container.attr('id')}`, resize);


    function resize() {
      let targetWidth = parseInt(container.style('width'));
      svg.attr('width', targetWidth);
      svg.attr('height', Math.round(targetWidth / aspect));
    }
  }

}

export default BaseChart;
