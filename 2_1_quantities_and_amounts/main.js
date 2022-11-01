/* CONSTANTS AND GLOBALS */
const margin = { y: window.innerHeight / 10, x: window.innerWidth / 14 };
const width = window.innerWidth - margin.x;
const height = window.innerHeight - margin.y;

/* LOAD DATA */
d3.csv("../data/statePopulations.csv", d3.autoType).then((data) => {
  console.log("data", data);

  /* SCALES */
  const xScale = d3
    .scaleBand()
    .domain(data.map((item) => item["State"]))
    .range([0, width])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (item) => item["Total Housing Units"])])
    .range([height, 0]);

  /* HTML ELEMENTS */
  /** Select your container and append the visual elements to it */
  const svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  // .attr("transform", "translate(0," + 100 + ")");

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("width", (item) => height - yScale(item["Total Housing Units"]))
    .attr("height", xScale.bandwidth())

    .attr("y", (item) => xScale(item["State"]))
    .attr("transform", "translate(110," + 0 + ")");

  svg
    .append("g")

    .call(d3.axisRight(xScale))
    // .attr("transform", "translate(" + margin.x + 100, " + 0 + ")
    .selectAll("text")

    .attr("transform", "translate(90,0)")
    .style("fill", "black")
    .style("text-anchor", "end");
});
