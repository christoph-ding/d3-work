function displayData(data) {
  // for testing and debugging
  console.log('displaying data: ...');
  console.log(data);

  var canvas = d3.select(".chart")
                 .selectAll()
                 .data(data)
                 .enter()
                 .append("p")
                 .style("width", function(d) { return d.age * 10 + "px"; })
                 .style("height", 100 + 'px')                 
                 .style("background-color", "blue");

  var bars;
  var axis;
  var title;

  var makeAxis = function(chartElement, data) {

  }

  var addBars = function(chartElement, data) {

  }

  var consumeData = function(dataSource) {

  }

  var determineAxisBounds = function(data, ticks) {

  }
}
