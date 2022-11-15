/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 };

/** these variables allow us to access anything we manipulate in
 * init() but need access to in draw().
 * All these variables are empty before we assign something to them.*/
let svg;

/**
 * APPLICATION STATE
 * */
let state = {
  geojson: null,
  extremes: null,
  hover: {
    latitude: null,
    longitude: null,
    state: null,
  },
};

/**
 * LOAD DATA
 * Using a Promise.all([]), we can load more than one dataset at a time
 * */
Promise.all([d3.json("../data/usState.json")]).then(([geojson]) => {
  state.geojson = geojson;
  // console.log("state: ", state);
  init();
});

/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {
  // our projection and path are only defined once, and we don't need to access them in the draw function,
  // so they can be locally scoped to init()
  const projection = d3.geoAlbersUsa().fitSize([width, height], state.geojson);
  const path = d3.geoPath().projection(projection);

  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .selectAll(".state")
    // all of the features of the geojson, meaning all the states as individuals
    .data(state.geojson.features)
    .join("path")
    .attr("d", path)
    .attr("class", "state")
    .attr("fill", "transparent");

  // EXAMPLE 1: going from Lat-Long => x, y
  // for how to position a dot
  const GradCenterCoord = { latitude: 40.7423, longitude: -73.9833 };

  //   40.8506° N, 73.8770° W - bronx
  //   44.7674° N, 93.1958° W - MN
  //    28.3574° N, 81.5906°  W - Disney
  //   40.1562° N, 83.1180° W The Columbus Zoo and Aquarium
  // top 4 largest zoos! cool
  const top4Zoos = [
    { latitude: 40.8506, longitude: -73.877, name: "Bronx Zoo" },
    { latitude: 44.7674, longitude: -93.1958, name: "MN Zoo" },
    { latitude: 28.3574, longitude: -81.5906, name: "Disney's Animal Kingdom" },
    {
      latitude: 40.1562,
      longitude: -83.118,
      name: "The Columbus Zoo and Aquarium",
    },
  ];
  const circle = svg
    .selectAll("circle")
    .data(top4Zoos)
    .join("circle")
    .attr("r", 20)
    .attr("fill", "steelblue")
    .attr("transform", (d) => {
      const [x, y] = projection([d.longitude, d.latitude]);
      return `translate(${x}, ${y})`;
    });

  circle.on("mouseover", (mouseEvent, d) => {
    state.hover["Name"] = d.name;

    draw();
  });

  draw();
}

function draw() {
  // return an array of [key, value] pairs
  hoverData = Object.entries(state.hover);

  d3.select("#hover-content")
    .selectAll("div.row")
    .data(hoverData)
    .join("div")
    .attr("class", "row")
    .html(
      (d) =>
        // each d is [key, value] pair
        d[1] // check if value exist
          ? `${d[0]}: ${d[1]}` // if they do, fill them in
          : null // otherwise, show nothing
    );
}
