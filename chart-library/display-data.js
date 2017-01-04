function displayData(data) {
  // for testing and debugging
  console.log('displaying data: ...');
  console.log(data);

  var widthCanvas = 350;
  var heightCanvas = 350;

  var canvas = d3.select(".chart")

  var maxDomainX = d3.max(data, function(d) {
    return d[0];
  });

  var maxDomainY = d3.max(data, function(d) {
    return d[1];
  })

  var xScale = d3.scale.linear()
                       .domain([0, maxDomainX])
                       .range([0, widthCanvas])

  var yScale = d3.scale.linear()
                       .domain([0, maxDomainY])
                       .range([0, heightCanvas])

  // var xAxis = d3.svg.axis()
  //       .scale(xScale)

  // canvas.append("g")
  //       .call(xAxis)

}
