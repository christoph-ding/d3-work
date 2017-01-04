function displayData(data) {
  // for testing and debugging
  console.log('displaying data: ...');

  var widthCanvas = 350;
  var heightCanvas = 350;

  var canvas = d3.select(".chart")                 
                 .append("svg")
                 .attr("width", 1000)
                 .attr("height", 500)
                 .style("background-color", "red")

  // determine scales for both axes
  var maxDomainX = d3.max(data, function(d) {
    return d[0];
  });

  var maxDomainY = d3.max(data, function(d) {
    return d[1];
  })

  var xScale = d3.scale.linear()
                       .domain([0, maxDomainX])
                       .range([0, widthCanvas]);

  var yScale = d3.scale.linear()
                       .domain([0, maxDomainY])
                       .range([0, heightCanvas]);

  // axes
  var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom");

  // canvas.append("g")
  //       .call(xAxis);

}
