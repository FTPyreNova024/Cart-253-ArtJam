/**
 * Magic Clock
 * 
 * By Daniel Munoz C
 * 
 * A clock that can change the time of day by clicking on the clock face.
 */

"use strict";

//Creates the starting hours and minutes of the clock.

let hours = 12;
let minutes = 0;

//Sets the color fo the house

const houseColor = [255, 228, 166];
const roofColor = [166, 113, 70];

//creates the two ends of the color spectrum for the background as arrays.

const color1 = [161, 211, 255];
const color2 = [26, 42, 87];

//Sets the colors for the window being on and off

/**
 * Creates the canvas and sets the projets units to degrees.
 */

function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
}

function draw() {

    //Sets the time of day in intervals of 24hours and 30 minutes to correspond to the time of day.
    let timeRatio = (hours * 60 + minutes) / (24 * 60);
    let bgColor = getBackgroundColor(timeRatio);

    //Sets the background color
    background(bgColor);

    //Draws the house and the window
    drawHouse();
    drawWindow();

    //Draws the grass
    drawGrass();

    //Draws the clock
    push();
    translate(900, 900);
    drawClock();
    pop();

}

/**
 * The system that will determin if it is day or night.
 */

function getBackgroundColor(t) {
    //Devides the time in a range of 0 to 1 and makes the time jump from .99 to .02 to correspond to the time of day
    let phase = t < 0.5 ? t * 2 : (1 - t) * 2;

    //Sets the color range depending on the time of day. By comparing each value in the arrays of color1 and color2
    let r = lerp(color1[0], color2[0], phase);
    let g = lerp(color1[1], color2[1], phase);
    let b = lerp(color1[2], color2[2], phase);
    return color(r, g, b);
}

/**
 * The clock and the motion of the hands
 */

function drawClock() {

    //Clock face 
    fill(255);
    noStroke();
    ellipse(0, 0, 100);


    //Hour hand
    push();
    //converts the hour and minute values into angles between -90 and 270.
    rotate(map(hours % 12 + minutes / 60, 0, 12, -90, 270));
    stroke(0);
    strokeWeight(4);
    line(0, 0, 30, 0)
    pop();

    //Minute Hand
    push();
    rotate(map(minutes, 0, 60, -90, 270));
    stroke(0);
    strokeWeight(2);
    line(0, 0, 40, 0);
    pop();

    //Center dot
    fill(0);
    noStroke();
    ellipse(0, 0, 7);
}

/**
 *  Determins if the clock is pressed and what to do if it is.
 */

function mousePressed() {
    let d = dist(mouseX, mouseY, 900, 900);
    if (d < 50) {
        advanceTime();
    }
}

/**
 * Sets the logic for the minutes and hours
 */

function advanceTime() {
    minutes += 30;
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
        if (hours >= 24) {
            hours = 0;
        }
    }
}

function drawHouse() {
    // Draws the house
    push();
    fill(houseColor);
    noStroke();
    rect(50, 400, 450, 300);
    pop();

    push();
    fill(roofColor);
    noStroke();
    triangle(0, 400, 275, 200, 550, 400);
    pop();
}

function drawGrass() {
    // Draws the grass
    push();
    fill(55, 128, 28);
    noStroke();
    rect(0, 700, 1000, 300);
    pop();
}

function drawWindow() {
    // Draws the window that changes color based on the time of day
    let rectColor = (hours >= 6 && hours < 20) ? color(255, 230, 5) : color(0, 0, 0);
    push();
    fill(rectColor);
    noStroke();
    rect(100, 450, 150, 100);
    rect(300, 450, 150, 100);
    pop();
}