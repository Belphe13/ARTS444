let video;
let modeX = 100;
let modeX_speed = 0.5;

function setup() {

  /* stalker */
  video = createVideo("Stalker_Dream.mp4");
  video.loop();
  video.size(420, 300);
//  video.hide();

  createCanvas(video.width, video.height);
  noStroke();
  noCursor();

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
  for (let row = 0; row < video.height; row += 15) {
    for (let col = 0; col < video.width; col += 15) {

      // get rgb values for each pixel
      let i = (col + row * video.width) * 4;
      let r = video.pixels[i + 0];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];
      let h = hue(color(r, g, b));
      let s = saturation(color(r, g, b));
      let l = brightness(color(r, g, b));

      if ((h >= 351 && h <= 360) || (h >= 0 && h < 21.5)) {
        h = 4;
        s = 96;
        l = 60;
      } // red
      else if (h >= 21.5 && h < 45.5) {
        h = 39;
        s = 98;
        l = 58;
      } // orange
      else if (h >= 45.5 && h < 73.5) {
        h = 52;
        s = 99;
        l = 60;
      } // bright orange
      else if (h >= 73.5 && h < 128) {
        h = 95;
        s = 65;
        l = 68;
      } // lime
      else if (h >= 128 && h < 182) {
        h = 161;
        s = 72;
        l = 47;
      } // bright green
      else if (h >= 182 && h < 208.5) {
        h = 203;
        s = 87;
        l = 58;
      } // dark azure
      else if (h >= 208.5 && h < 241.5) {
        h = 214;
        s = 86;
        l = 46;
      } // blue
      else if (h >= 241.5 && h < 303.5) {
        h = 269;
        s = 49;
        l = 46;
      } // dark purple
      else if (h >= 303.5 && h < 351) {
        h = 338;
        s = 93;
        l = 62;
      } // dark pink

      colorMode(HSB, 255);

      fill(h, s, l);
      rect(col, row, 15, 15);

    }
  }
}
