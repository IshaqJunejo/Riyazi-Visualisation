let sliders = document.querySelectorAll(".slider-container");

for (i = 0; i < sliders.length; i++)
{
    let minValue = sliders[i].querySelector("#min");
    let maxValue = sliders[i].querySelector("#max");
    let rangeSlider = sliders[i].querySelector(".slider");

    minValue.innerHTML = rangeSlider.min;
    maxValue.innerHTML = rangeSlider.max;
}