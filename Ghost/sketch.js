var video;
var lineHeight = 30;
var lineSpeed = 10;
var choices = [10, 20, 30, 40, 50, 60];
var x1, y1, x2, y2, x3, y3;

function setup() {
  /* Ghost in the Shell */
  video = createVideo("Ghost_Intro.mp4");
  video.loop();
  video.size(420, 280);
  video.hide();

  createCanvas(video.width, video.height);
  //noStroke();
  frameRate(5);
}

function draw() {
  /*
  lineHeight += lineSpeed;
  if (lineHeight >= 50) {lineSpeed = -lineSpeed;}
  else if (lineHeight <= 10) {lineSpeed = -lineSpeed;}
  */

  lineHeight = random(choices);

  background(50);
  video.loadPixels();

  // loop tho pixels to get each values
  // starting from -10
  for (let row = 0; row < video.height + lineHeight; row += lineHeight) {
    for (let col = -lineHeight / 2; col < video.width; col += lineHeight) {

      // get rgb values for each pixel
      let i = (col + row * video.width) * 4;
      let r = video.pixels[i + 0];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      fill(r, g, b);
      noStroke();
      // odd number line
      if ((((row + lineHeight * 2) % (lineHeight * 2))) == 0) {
        rect(col, row, lineHeight, lineHeight);
      }
      // even number line
      else {
        rect(col + lineHeight / 2, row, lineHeight, lineHeight);
      }
    }
  }

  // triangles
  for (let row = lineHeight / 2; row < video.height + lineHeight / 2; row += lineHeight) {
    for (let col = lineHeight / 2; col < video.width + lineHeight; col += lineHeight) {
      let i = (col + row * video.width) * 4;
      let r = video.pixels[i + 0];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      fill(r, g, b);
      // odd number line
      if (((row + lineHeight * 3 / 2) % (lineHeight * 2)) == 0) {
        x1 = col;
        y1 = row - lineHeight / 2;
        x2 = col - lineHeight / 2;
        y2 = row + lineHeight / 2;
        x3 = col + lineHeight / 2;
        y3 = y2;
      }
      // even number line
      else {
        x1 = col - lineHeight / 2;
        y1 = row - lineHeight / 2;
        x2 = col - lineHeight;
        y2 = row + lineHeight / 2;
        x3 = col;
        y3 = y2;
      }

      //stroke(0);
      triangle(x1, y1, x2, y2, x3, y3);
    }
  }

}
