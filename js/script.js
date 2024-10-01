/**
 * Leaving
 * 
 * By Daniel Munoz C
 * 
 * A representation of two things changing by their distance.
 */

"use strict";

//Creates the starting hours and minutes of the clock.


let hours = 12;
let minutes = 0;

//creates the two ends of the color spectrum for the background as arrays.

const color1 = [161, 211, 255];
const color2 = [26, 42, 255];

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

    background(bgColor);

    //Draws the clock
    push();
    translate(900, 900);
    drawClock();
    pop();
}

function getBackgroundColor(t) {
    //Devides the time in a range of 0 to 1 and makes the time jump from .99 to .02 to correspond to the time of day
    let phase = t < 0.5 ? t * 2 : (1 - t) * 2;

    //Sets the color range depending on the time of day. By comparing each value in the arrays of color1 and color2
    let r = lerp(color1[0], color2[0], phase);
    let g = lerp(color1[1], color2[1], phase);
    let b = lerp(color1[2], color2[2], phase);
    return color(r, g, b);
}

function drawClock() {

    //Clock face 
    fill(255);
    noStroke();
    ellipse(0, 0, 100);


    //Hour hand
    push();
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