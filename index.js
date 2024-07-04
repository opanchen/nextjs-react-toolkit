const imageZoom = document.getElementById("imageZoom");

imageZoom.addEventListener("mousemove", (e) => {
  imageZoom.style.setProperty("--display", "block");

  // element's width = 550px (css)
  // center pointer = (225 * 100) / 550 = 40.9%
  // (e.offsetX * 100) / offsetWidth

  // element's height = 700px (css)
  // pointer = (400 * 100) / 700 = 57.1%
  //  (e.offsetY * 100) / offsetHeight

  let pointer = {
    x: (e.offsetX * 100) / imageZoom.offsetWidth,
    y: (e.offsetY * 100) / imageZoom.offsetHeight,
  };

  imageZoom.style.setProperty("--zoom-x", pointer.x + "%");
  imageZoom.style.setProperty("--zoom-y", pointer.y + "%");
});

imageZoom.addEventListener("mouseout", () => {
  imageZoom.style.setProperty("--display", "none");
});
