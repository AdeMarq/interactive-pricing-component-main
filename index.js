const togglePrice = document.querySelector(".toggle-btn");
const toggleBackground = document.querySelector(".toggle-wrapper");
let view = document.getElementById("views");
let cost = document.getElementById("cost");
let costm = document.getElementById("costm");
let priceSlider = document.getElementById("slider");
let pageView = ["10k", "50k", "100k", "500k", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isItYearly = false;

togglePrice.addEventListener("click", () => {
  togglePrice.classList.toggle("active");
  toggleBackground.classList.toggle("active");

  if (isItYearly == false) {
    isItYearly = true;
  } else {
    isItYearly = false;
  }
});

priceSlider.addEventListener("input", () => {
  updateValue();

  view.innerHTML = pageView[priceSlider.value];

  let value = this.slider.value * 25;

  console.log(value);

  priceSlider.style.background = ` linear-gradient(to right, 
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,  
        hsl(224, 65%, 95%) 100%) `;
});

function updateValue() {
  if (isItYearly) {
    cost.innerHTML = perMonth[slider.value] * 0.75;
    costm.innerHTML = perMonth[slider.value] * 0.75;
  } else {
    cost.innerHTML = perMonth[slider.value];
    costm.innerHTML = perMonth[slider.value];
  }
}
