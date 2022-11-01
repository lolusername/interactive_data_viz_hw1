/* CONSTANTS AND GLOBALS */
const margin = { y: window.innerHeight / 10, x: window.innerWidth / 14 };
const width = window.innerWidth - margin.x;
const height = window.innerHeight - margin.y;

Promise.all([
  d3.json("../data/usState.json"),
  d3.csv("../data/usHeatExtremes.csv", d3.autoType),
]).then(([geojson, extremes]) => {
  console.log(extremes);

  svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const projection = d3
    .geoAlbersUsa()
    .fitSize([width - margin.x, height - margin.y], geojson);

  // DEFINE PATH FUNCTION
  const path = d3.geoPath(projection);

  // draw base layer path - one path for each state
  const states = svg
    .selectAll("path.states")
    .data(geojson.features)
    .join("path")
    .attr("class", "states")
    .attr("stroke", "black")
    .attr("fill", "transparent")
    .attr("d", path);

  const myColor = d3.scaleLinear().domain([1, 40]).range(["blue", "red"]);

  svg
    .selectAll("circle.extreme")
    .data(extremes)
    .join("circle")
    .attr("r", (d) => Math.abs(d["Change in 95 percent Days"]) / 2)
    .attr("opacity", 0.5)
    .attr("fill", (d) => myColor(d["Change in 95 percent Days"]))
    .attr("transform", (extreme) => {
      const [x, y] = projection([extreme.Long, extreme.Lat]);
      return `translate(${x}, ${y})`;
    });
});
