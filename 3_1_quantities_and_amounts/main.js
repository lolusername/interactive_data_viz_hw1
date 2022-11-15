/* CONSTANTS AND GLOBALS */
const width = window.innerWidth,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 60, left: 60, right: 40 },
  radius = 5;
let xScale, yScale;

/* APPLICATION STATE */
let state = {
  data: [],
};

/* LOAD DATA */
d3.csv("../data/statePopulations.csv", d3.autoType).then((raw_data) => {
  console.log("data", raw_data);
  // save our data to application state
  state.data = raw_data;
  init();
});

/* INITIALIZING FUNCTION */
// this will be run *one time* when the data finishes loading in
function init() {
  /* SCALES */
  // xscale - categorical, activity
  xScale = d3
    .scaleBand()
    .domain(state.data.map((d) => d.State))
    .range([0, width]); // visual variable

  // yscale - linear,count
  yScale = d3
    .scaleLinear()
    .domain([0, d3.max(state.data, (d) => d["Total Housing Units"])])
    .range([height, 0]);

  draw(); // calls the draw function
}

/* DRAW FUNCTION */
// we call this everytime there is an update to the data/state
function draw() {
  /* HTML ELEMENTS */
  // svg
  const svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const myColor = d3
    .scaleLinear()
    .domain([1, 4000000])
    .range(["blue", "brown"]);

  // bars
  svg
    .selectAll("rect")
    .data(state.data)
    .join("rect")
    .attr("width", xScale.bandwidth())
    .attr("fill", (d) => myColor(d["Total Housing Units"]))
    .attr("height", (d) => height - yScale(d["Total Housing Units"]))
    .attr("x", (d) => xScale(d.State))
    .attr("y", (d) => yScale(d["Total Housing Units"]) - 100);
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)

    .call(d3.axisBottom(xScale))

    // .attr("transform", "translate(" + margin.x + 100, " + 0 + ")
    .attr("transform", `translate(0,${height - margin.bottom - margin.top})`)

    .selectAll("text")
    .attr("transform-origin", "15 15")

    .attr("transform", "rotate(-45)")

    .style("fill", "black")
    .style("text-anchor", "end");
}
