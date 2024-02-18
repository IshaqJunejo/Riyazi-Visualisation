let factor = canvas_1.width / 30;

let slope, intercept;
let left, right;

let slider_2 = document.querySelector("#slider-2");
let output_2 = document.querySelector("#value-2");
output_2.innerHTML = (" + " + slider_2.value);

let checkbox = document.querySelector("#checkbox");
let symbol = document.querySelector("#symbol");
symbol.innerHTML = "<=";

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

checkbox.oninput = function()
{
    updateValues();

    if (checkbox.value == 0)
    {symbol.innerHTML = "<=";}
    else
    {symbol.innerHTML = ">=";}
}

function updateValues()
{
    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);

    slope = parseInt(slider_1.value);
    intercept = parseInt(slider_2.value);

    left = slope * -15 + intercept;
    right = slope * 15 + intercept;

    drawGrid();
    drawInequality();

    if (slider_1.value == 1)
    {output_1.innerHTML = "X";}
    else
    {output_1.innerHTML = slider_1.value + "X";}
}

function drawGrid()
{
    ctx_1.strokeStyle = "#111";

    // Rectangle Around
    ctx_1.strokeRect(0, 0, canvas_1.width, canvas_1.height);
    
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

function drawInequality()
{
    // Line
    ctx_1.strokeStyle = "#8b0000";

    ctx_1.beginPath();
    ctx_1.moveTo(-15 * factor + canvas_1.width / 2, -left * factor + canvas_1.height / 2);
    ctx_1.lineTo(15 * factor + canvas_1.width / 2, -right * factor + canvas_1.height / 2);
    ctx_1.stroke();
    
    // Area Under the Line
    ctx_1.fillStyle = "rgb(200 0 0 / 20%)";

    if (checkbox.value == 0)
    {
        ctx_1.beginPath();
        ctx_1.moveTo(-15 * factor+ canvas_1.width / 2, -left * factor + canvas_1.height / 2);
        ctx_1.lineTo(15 * factor + canvas_1.width / 2, -right * factor + canvas_1.height / 2);
        ctx_1.lineTo(canvas_1.width, canvas_1.height);
        ctx_1.lineTo(0, canvas_1.height);
        ctx_1.fill();
    }
    else
    {
        ctx_1.beginPath();
        ctx_1.moveTo(-15 * factor+ canvas_1.width / 2, -left * factor + canvas_1.height / 2);
        ctx_1.lineTo(15 * factor + canvas_1.width / 2, -right * factor + canvas_1.height / 2);
        ctx_1.lineTo(canvas_1.width, 0);
        ctx_1.lineTo(0, 0);
        ctx_1.fill();
    }

    ctx_1.fillStyle = "rgb(50 50 50 / 100%)";
}