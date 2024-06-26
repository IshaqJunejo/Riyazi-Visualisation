let factor = canvas_1.width / 30;

let slope, intercept;
let left, right;

let slider_2 = document.querySelector("#slider-2");
let output_2 = document.querySelector("#value-2");
output_2.innerHTML = (" + " + slider_2.value);

updateValues();

slider_2.oninput = function()
{
    if (this.value > 0)
    {output_2.innerHTML = (" + " + this.value);}
    else if (this.value < 0)
    {output_2.innerHTML = (" - " + this.value * -1);}
    else
    {output_2.innerHTML = ("");}
    updateValues();
}

function updateValues()
{
    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);

    slope = parseInt(slider_1.value);
    intercept = parseInt(slider_2.value);

    left = (-15 * slope) + intercept;
    right = (15 * slope) + intercept;

    drawCoordinates();
    drawEquation();

    if (slider_1.value == 1)
    {output_1.innerHTML = "X";}
    else
    {output_1.innerHTML = slider_1.value + "X";}
}

function drawCoordinates()
{
    ctx_1.strokeStyle = "#111";

    // X-Axis
    ctx_1.beginPath();
    ctx_1.moveTo(0, canvas_1.height / 2);
    ctx_1.lineTo(canvas_1.width, canvas_1.height / 2);
    ctx_1.stroke();
    
    // Y-Axis
    ctx_1.beginPath();
    ctx_1.moveTo(canvas_1.width / 2, 0);
    ctx_1.lineTo(canvas_1.width / 2, canvas_1.height);
    ctx_1.stroke();

    // Font
    ctx_1.font = "12px Arial";
    ctx_1.fontAlign = "center";

    for (let i = 0; i <= 30; i++)
    {
        // Dots on X-Axis
        ctx_1.beginPath();
        ctx_1.arc(i * factor, canvas_1.height / 2, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        // Dots on Y-Axis
        ctx_1.beginPath();
        ctx_1.arc(canvas_1.width / 2, i * factor, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        if (i % 3 == 0 && i != 0 && i != 15 && i != 30)
        {
            // Numbers on X-Axis
            ctx_1.fillText((i - 15), i * factor - 6, canvas_1.height / 2 - 4);

            // Numbers on Y-Axis
            ctx_1.fillText((i - 15) * -1, canvas_1.width / 2 + 6, i * factor + 4);
        }
    }
}

function drawEquation()
{
    ctx_1.strokeStyle = "#8b0000";

    ctx_1.beginPath();
    ctx_1.moveTo(-15 * factor + canvas_1.width / 2, -left * factor + canvas_1.height / 2);
    ctx_1.lineTo(15 * factor + canvas_1.width / 2, -right * factor + canvas_1.height / 2);
    ctx_1.stroke();
}