let diameter_button;
let x = 10;
let y = 10;

setup = () => {
  createCanvas(200, 200);
  diameter_button = select("#diameter");
};

draw = () => {
  background(200);
  ellipse(x, y, 10, 10);
  diameter_button.mousePressed(maxim);
};

keyPressed = () => {
  x++;
  y++;
};
