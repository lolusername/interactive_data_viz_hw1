let counter = 0;
const display = document.querySelector("#display");
const btn = document.querySelector("#increment");

btn.addEventListener("click", () => (display.innerHTML = ++counter));
