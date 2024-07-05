const card = document.querySelector(".inner");

card.addEventListener("mousemove", (e) => {
  let positionPx = e.x - card.getBoundingClientRect().left;
  let positionX = (positionPx / card.offsetWidth) * 100;
  //   console.log(positionX, positionPx);

  let positionPy = e.y - card.getBoundingClientRect().top;
  let positionY = (positionPy / card.offsetHeight) * 100;

  card.style.setProperty("--rX", 0.5 * (50 - positionY) + "deg");
  card.style.setProperty("--rY", -0.5 * (50 - positionX) + "deg");
});

card.addEventListener("mouseout", () => {
  card.style.setProperty("--rX", "0deg");
  card.style.setProperty("--rY", "0deg");
});
