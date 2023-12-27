// Canvas
let canvas_1 = document.querySelector("#canvas-1");

let ctx_1 = canvas_1.getContext("2d");

// Sliders
let slider_1 = document.querySelector("#slider-1");
let slider_2 = document.querySelector("#slider-2");

// Output
let output_1 = document.querySelector("#value-1");
let output_2 = document.querySelector("#value-2");

output_1.innerHTML = slider_1.value;
output_2.innerHTML = slider_2.value;

// Updating Slider Value
slider_1.oninput = function()
{
    output_1.innerHTML = this.value;
    updateValues();
}

slider_2.oninput = function()
{
    output_2.innerHTML = this.value;
    updateValues();
}