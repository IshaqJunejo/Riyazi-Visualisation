// Canvas
let canvas_1 = document.querySelector("#canvas-1");

let ctx_1 = canvas_1.getContext("2d");

// Sliders
let slider_1 = document.querySelector("#slider-1");

// Output
let output_1 = document.querySelector("#value-1");

output_1.innerHTML = slider_1.value;

// Updating Slider Value
slider_1.oninput = function()
{
    output_1.innerHTML = this.value;
    updateValues();
}