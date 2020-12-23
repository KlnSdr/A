let offset = 50;
let y;
let speed = 1;
let angle = 0;

let x;

let index = 0;

function setup() {
  createCanvas(400, 400);
  y = offset;
  x = 0;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);

  drawA();
}

function drawA() {
  if (index == 0) {
    if (y < height - offset) {
      line(width / 2, offset, width / 2, y);
      y += speed;
    } else {
      push();
      translate(width / 2, offset);
      rotate(angle);
      line(0, 0, 0, height - 2 * offset);

      rotate(-2 * angle);
      line(0, 0, 0, height - 2 * offset);
      pop();

      if (angle < PI / 8) {
        angle += 0.003;
      } else {
        line(width / 2 - x, height / 2, width / 2 + x, height / 2);
        if (x < offset) {
          x += speed - 0.5;
        } else {
          index++;
          resetA();
        }
      }
    }
  } else {
    resetA();
  }
}

function resetA() {
  if (index == 1) {
    push();
    translate(width / 2, offset);
    rotate(angle);
    line(0, 0, 0, height - 2 * offset);

    rotate(-2 * angle);
    line(0, 0, 0, height - 2 * offset);
    pop();
    if (x > 0) {
      line(width / 2 - x, height / 2, width / 2 + x, height / 2);
      x -= speed - 0.5;
    } else {
      if (angle > 0) {
        angle -= 0.003;
      } else {
        index++;
        xN = 0;
        fade = 0;
        drawN();
      }
    }
  } else {
    drawN();
  }
}

let xN;
let fade;

function drawN() {
  if (index == 2) {
    if (xN < offset) {
      line(width / 2 - xN, offset, width / 2 - xN, height - offset);
      line(width / 2 + xN, offset, width / 2 + xN, height - offset);
      xN += speed;
    } else {
      if (fade < 255) {
        line(width / 2 - xN, offset, width / 2 - xN, height - offset);
        line(width / 2 + xN, offset, width / 2 + xN, height - offset);

        push();
        stroke(255, fade)
        line(width / 2 - xN, offset, width / 2 + xN, height - offset);
        fade += 2 * speed;
        pop();
      } else {
        index++;
        xD = 0;
        drawD();
      }
    }
  } else {
    drawD();
  }
}

let xD;

function drawD() {
  if (index == 3) {
    if (fade > 0) {
      line(width / 2 - xN, offset, width / 2 - xN, height - offset);
      line(width / 2 + xN, offset, width / 2 + xN, height - offset);

      push();
      stroke(255, fade)
      line(width / 2 - xN, offset, width / 2 + xN, height - offset);
      fade -= 2 * speed;
      pop();
    } else {
      if (xD < 2 * offset) {
        line(width / 2 - xN, offset, width / 2 - xN, height - offset);
        line(width / 2 + xN, offset, width / 2 + xN, height - offset);

        line(width / 2 - xN, offset, width / 2 - xN + xD, offset);
        line(width / 2 + xN, height - offset, width / 2 + xN - xD, height - offset);

        xD += speed;
      } else {
        index++;
        yR = 0;
        drawR();
      }
    }
  } else {
    drawR();
  }
}

let yR;

function drawR() {
  if (index == 4) {
    if (yR < height / 2 - offset) {
      line(width / 2 - xN, offset, width / 2 - xN, height - offset);
      line(width / 2 + xN, offset, width / 2 + xN, height - offset);

      line(width / 2 - xN, offset, width / 2 - xN + xD, offset);

      line(width / 2 + xN, height - offset - yR, width / 2 + xN - xD, height - offset - yR);
      yR += speed;
    } else {
      index++;
      yE = offset;
      xE = 0;
      drawE();
    }
  } else {
    drawE();
  }
}

let yE;
let xE;

function drawE() {
  if (index == 5) {
    if (yE < height - offset) {
      line(width / 2 - xN, offset, width / 2 - xN, height - offset);
      line(width / 2 - xN, offset, width / 2 - xN + xD, offset);
      line(width / 2 - offset, height / 2, width / 2 + offset, height / 2);


      line(width / 2 + xN, yE, width / 2 + xN, height - offset);
      yE += speed;
    } else {
      if (xE < 2 * offset) {
        line(width / 2 - xN, offset, width / 2 - xN, height - offset);
        line(width / 2 - xN, offset, width / 2 - xN + xD, offset);
        line(width / 2 - offset, height / 2, width / 2 + offset, height / 2);

        line(width / 2 + offset, height - offset, width / 2 + offset - xE, height - offset);
        xE += speed;
      } else {
        index++;
        xAE = 2 * offset;
        xAE2 = offset;
        angleA2 = 0;
        xA = 0;
        drawSecondA();
      }
    }
  } else {
    drawSecondA();
  }
}

let xAE;
let xAE2;
let angleA2;
let xA;

function drawSecondA() {
  if (index == 6) {
    if (xAE > 0) {
      line(width / 2 - xN, offset, width / 2 - xN, height - offset);

      line(width / 2 - offset, offset, width / 2 - offset + xAE, offset);
      line(width / 2 - offset, height / 2, width / 2 - offset + xAE, height / 2);
      line(width / 2 - offset, height - offset, width / 2 - offset + xAE, height - offset);

      xAE -= speed;
    } else {
      if (xAE2 > 0) {
        line(width / 2 - xAE2, offset, width / 2 - xAE2, height - offset);
        xAE2 -= speed;
      } else {
        push();
        translate(width / 2, offset);
        rotate(angleA2);
        line(0, 0, 0, height - 2 * offset);

        rotate(-2 * angleA2);
        line(0, 0, 0, height - 2 * offset);
        pop();

        if (angleA2 < PI / 8) {
          angleA2 += 0.003;
        } else {
          line(width / 2 - xA, height / 2, width / 2 + xA, height / 2);
          if (xA < offset) {
            xA += speed - 0.5;
          } else {
            index++;
            resetSecondA();
          }
        }
      }
    }
  } else {
    resetSecondA();
  }
}

function resetSecondA() {
  if (index == 7) {
    push();
    translate(width / 2, offset);
    rotate(angleA2);
    line(0, 0, 0, height - 2 * offset);

    rotate(-2 * angleA2);
    line(0, 0, 0, height - 2 * offset);
    pop();

    if (xA > 0) {
      line(width / 2 - xA, height / 2, width / 2 + xA, height / 2);
      xA -= speed - 0.5;
    } else {
      if (angleA2 > 0) {
        angleA2 -= 0.003;
      } else {
        index++;
        xPR = 0;
        prepareRestart();
      }
    }
  } else {
    prepareRestart();
  }
}

let xPR;

function prepareRestart() {
  if (index == 8) {
    if (xPR < height - 2 * offset) {
      line(width / 2, offset + xPR, width / 2, height - offset);
      xPR += speed;
    } else {
      index = 0;
      angle = 0;
      y = offset;
      x = 0;
    }
  }
}