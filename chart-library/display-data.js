function displayData(data) {
  // for testing and debugging
  console.log('displaying data: ...');
  console.log(data);

  // visualization
  d3.select("body")
    .append("ul")
    .selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .text(function(d) {
      return d.name + d.age
    });
}
