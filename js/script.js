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