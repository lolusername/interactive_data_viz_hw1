let counter = 0;
const display = document.querySelector("#display");
const btn = document.querySelector("#increment");

const bonusObj = {};

btn.addEventListener("click", () => {
  display.innerHTML = ++counter;

  //   bonus
  const dateString = String(Date.now());

  bonusObj[dateString] = counter;

  console.log(bonusObj);
});
