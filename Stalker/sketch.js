let video;
let modeX = 100;
let modeX_speed = 0.5;

function setup() {

  /* vertigo */
  video = createVideo("Stalker_Enter_Zone.mp4");
  video.loop();
  video.size(420, 270);
//  video.hide();

  createCanvas(video.width, video.height);
  noStroke();
  ellipseMode(CENTER);
}

function draw() {
  background(250);
  video.loadPixels();


  // loop tho pixels
  for (let row = 5; row < video.height; row += 10) {
    for (let col = 5; col < video.width; col += 10) {

      // get rgb values for each pixel
      let i = (col + row * video.width) * 4;
      let r = video.pixels[i + 0];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];
      let h = hue(color(r, g, b));
      let s = saturation(color(r, g, b));
      let l = brightness(color(r, g, b));



//      colorMode(HSB, 255);

      fill(r,g,b);
      ellipse(col, row, s/255*100, s/255*100);
    }
  }
}
