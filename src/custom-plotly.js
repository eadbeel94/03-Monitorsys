// in custom-plotly.js
var Plotly = require('plotly.js/lib/core');

// Load in the trace types for pie, and choropleth
Plotly.register([
    require('plotly.js/lib/bar'),
    require('plotly.js/lib/histogram'),
    require('plotly.js/lib/scatter'),
    require('plotly.js/lib/scatterpolar'),
]);

module.exports = Plotly;