// Opdracht 5A: Divide and Conquer

function setup () {
  createCanvas (windowWidth/2, windowHeight/2);
  background (240);
}

function draw () {
  line(0, height /3/1*2, width, height /3/1*2);
  line(0, height /3, width, height /3);

  line(width /4, 0, width /4, height);
  line(width /2/2*3, 0, width /2/2*3, height);
  line(width /2, 0, width/2, height);
  line(width, 0, width, height);

  fill (255,0,0)
  rect (width / 4, height / 3, width / 4, height /3)
  rect (width / 2, 0, width / 4, height /3)
  rect (width /2/2*3, height /3/1*2, width, height /3)
}
