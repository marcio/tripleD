import BarChart from './lib/BarChart.js';
import STAR_WARS_DATA from './data/starWars.js';

let chartOne = new BarChart('#chartOne', {margins: {top: 5, right: 5, bottom: 5, left: 5}}, STAR_WARS_DATA);
let chartTwo = new BarChart('#chartTwo', {size: {width: 600, height: 600}, margins: {right: 5, bottom: 5, left: 5}}, STAR_WARS_DATA);

chartOne.draw();
chartTwo.draw();
