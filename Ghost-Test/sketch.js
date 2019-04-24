let video;
let modeX = 100;
let modeX_speed = 0.5;

function setup() {

  /* stalker */
  video = createVideo("Ghost_Intro.mp4");
  video.loop();
  video.size(420, 270);
//  video.hide();

  createCanvas(video.width, video.height);
  noStroke();
}

function draw() {
  background(50);
  video.loadPixels();

  modeX = modeX + modeX_speed;
  if (modeX > 300) {
    modeX_speed = -modeX_speed;
  } else if (modeX < 100) {
    modeX_speed = -modeX_speed;
  }

  // loop tho pixels
  for (let row = 0; row < video.height; row += 1) {
    for (let col = 0; col < video.width; col += 1) {

      // get rgb values for each pixel
      let i = (col + row * video.width) * 4;
      let r = video.pixels[i + 0];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      colorMode(HSB, 255);

      fill(r, 255, b);
      rect(col, row, 1, 1);
    }
  }
}
