let video;

function setup() {
  /* 2001 - Stargate */
  video = createVideo("2001.mp4");
  video.loop();
  video.size(640, 360);
  video.hide();

  createCanvas(video.width, video.height);
}

function draw() {
  background(50);
  video.loadPixels();

  // loop tho pixels
  for (let row = 0; row < video.height; row += 15) {
    for (let col = 0; col < video.width; col += 15) {

      // get rgb values for each pixel
      let i = (col + row * video.width) * 4;
      let r = video.pixels[i + 0];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      fill(r, g, b);
      rect(col, row, 15, 15);
    }
  }
}
