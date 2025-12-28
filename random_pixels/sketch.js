function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fillRandomColors();
  noLoop(); // Stop draw from looping
}

// Function to fill the entire canvas with random colors
function fillRandomColors() {
  
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let c = randomRGBColor();
    pixels[i] = red(c);
    pixels[i + 1] = green(c);
    pixels[i + 2] = blue(c);
    pixels[i + 3] = 255; // no transparency
  }
  updatePixels();
}

// Helper function to generate a random RGB color
function randomRGBColor() {
  return color(random(255), random(255), random(255));
}
