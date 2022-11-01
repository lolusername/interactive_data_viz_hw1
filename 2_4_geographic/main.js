/* CONSTANTS AND GLOBALS */
const margin = { y: window.innerHeight / 10, x: window.innerWidth / 14 };
const width = window.innerWidth - margin.x;
const height = window.innerHeight - margin.y;

/**
 * LOAD DATA
 * Using a Promise.all([]), we can load more than one dataset at a time
 * */
Promise.all([
  d3.json("../data/usState.json"),
  d3.csv("../data/usHeatExtremes.csv", d3.autoType),
]).then(([geojson, extremes]) => {
  console.log(extremes);
  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // SPECIFY PROJECTION
  // a projection maps from lat/long -> x/y values
  // so it works a lot like a scale!
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

  // draw point for CUNY graduate center
  const gradCenterPoint = { latitude: 40.7423, longitude: -73.9833 };

  const myColor = d3.scaleLinear().domain([1, 40]).range(["blue", "red"]);

  // draw point for all state extremes
  svg
    .selectAll("circle.capital")
    .data(extremes)
    .join("circle")
    .attr("r", (d) => Math.abs(d["Change in 95 percent Days"]) / 2)
    .attr("opacity", 0.5)
    .attr("fill", (d) => myColor(d["Change in 95 percent Days"]))
    .attr("transform", (d) => {
      // use our projection to go from lat/long => x/y
      // ref: https://github.com/d3/d3-geo#_projection
      const [x, y] = projection([d.Long, d.Lat]);
      return `translate(${x}, ${y})`;
    });
});
