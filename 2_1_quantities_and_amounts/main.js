/* CONSTANTS AND GLOBALS */
let margin = { y: 100, x: 100 };
let width = window.innerWidth - margin.x;
let height = window.innerHeight - margin.y;

/* LOAD DATA */
d3.csv("../data/statePopulations.csv", d3.autoType).then((data) => {
  function render() {
    xScale = d3
      .scaleBand()
      .domain(data.map((item) => item["State"]))
      .range([0, height])
      .padding(0.1);

    yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (item) => item["Total Housing Units"])])
      .range([width, 0]);
    width = window.innerWidth - margin.x;
    height = window.innerHeight - margin.y;
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", (item) => width - yScale(item["Total Housing Units"]))
      .attr("height", xScale.bandwidth())

      .attr("y", (item) => xScale(item["State"]))
      .attr("transform", "translate(110," + 0 + ")");
  }

  /* SCALES */
  let xScale = d3
    .scaleBand()
    .domain(data.map((item) => item["State"]))
    .range([0, width])
    .padding(0.1);

  let yScale = d3
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
  render();
  window.onresize = render;
});
