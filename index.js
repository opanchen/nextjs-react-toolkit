const refs = {
  banner: document.querySelector(".banner"),
  canvas: document.getElementById("dotsCanvas"),
};
refs.canvas.width = refs.canvas.offsetWidth;
refs.canvas.height = refs.canvas.offsetHeight;
let ctx = refs.canvas.getContext("2d");

const dots = [];
const arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];

for (let i = 0; i < 50; i += 1) {
  dots.push({
    x: Math.floor(Math.random() * refs.canvas.width),
    y: Math.floor(Math.random() * refs.canvas.height),
    size: Math.random() * 3 + 5,
    color: arrayColors[Math.floor(Math.random() * 5)],
  });
}

const drawDots = () => {
  dots.forEach((dot) => {
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
    ctx.fill();
  });
};

drawDots();

refs.banner.addEventListener("mousemove", (e) => {
  ctx.clearRect(0, 0, refs.canvas.width, refs.canvas.height);
  drawDots();

  let mouse = {
    x: e.pageX - refs.banner.getBoundingClientRect().left,
    y: e.pageY - refs.banner.getBoundingClientRect().top,
  };

  dots.forEach((dot) => {
    let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
    if (distance < 300) {
      ctx.strokeStyle = dot.color;
      ctx.lineWidth = 1; // 1px
      ctx.beginPath();
      ctx.moveTo(dot.x, dot.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });
});

refs.banner.addEventListener("mouseout", () => {
  ctx.clearRect(0, 0, refs.canvas.width, refs.canvas.height);
  drawDots();
});
