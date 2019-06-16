let video;


function setup() {
  /* Trios Couleurs: Bleu - Opening */
  video = createVideo("bleu.mp4");
  video.loop();
  video.size(640, 360);
  video.hide();

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  video.loadPixels();

  let rbin = 0;
  let gbin = 0;
  let bbin = 0;

  // loop tho pixels
  for (let row = 0; row < video.height; row ++) {
    for (let col = 0; col < video.width; col ++) {

      // get rgb values for each pixel
      let i = (col + row * video.width) * 4;
      let r = video.pixels[i + 0];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      rbin += r;
      gbin += g;
      bbin += b;

      //fill(r, g, b);
      //rect(col, row, 15, 15);
    }
  }

  fill(rbin/video.height/video.width, gbin/video.height/video.width, bbin/video.height/video.width);
  rect(0,0,windowWidth,windowHeight);
}
