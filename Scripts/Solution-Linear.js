let factor = canvas_1.width / 30;

let left1, right1;
let left2, right2;

let slope1 = 2, intercept1;
let slope2 = -0.5, intercept2;

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

    intercept1 = parseInt(slider_1.value);
    intercept2 = parseInt(slider_2.value);

    left1 = (slope1 * -15) + intercept1;
    right1 = (slope1 * 15) + intercept1;
    left2 = (slope2 * -15) + intercept2;
    right2 = (slope2 * 15) + intercept2;

    drawGrid();
    drawEquation();
    drawSolution();

    if(slider_1.value == 0)
    {output_1.innerHTML = "";}
    else if(slider_1.value > 0)
    {output_1.innerHTML = (" + " + slider_1.value);}
    else if(slider_1.value < 0)
    {output_1.innerHTML = (" - " + slider_1.value * -1);}
}

function drawGrid()
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
    // First Linear Equation
    ctx_1.strokeStyle = "#8b0000";

    ctx_1.beginPath();
    ctx_1.moveTo(-15 * factor + canvas_1.width / 2, -left1 * factor + canvas_1.height / 2);
    ctx_1.lineTo(15 * factor + canvas_1.width / 2, -right1 * factor + canvas_1.height / 2);
    ctx_1.stroke();

    // Second Linear Equation
    ctx_1.strokeStyle = "#013220";

    ctx_1.beginPath();
    ctx_1.moveTo(-15 * factor + canvas_1.width / 2, -left2 * factor + canvas_1.height / 2);
    ctx_1.lineTo(15 * factor + canvas_1.width / 2, -right2 * factor + canvas_1.height / 2);
    ctx_1.stroke();
}

function drawSolution()
{
    // Derive The Value for X and Y
    // Y = (slope1)X + Intercept1
    // Y = (slope2)X + Intercept2

    // (slope1)X + Intercept1 = (slope2)X + Intercept2
    // (slope1)X - (slope2)X = Intercept2 - Intercept1
    // X(slope1 - slope2) = Intercept2 - Intercept1
    // X = (Intercept2 - Intercept1) / (slope1 - slope2)

    // Calculate the Value for X and Y
    let x, y;

    x = (intercept2 - intercept1) / (slope1 - slope2);
    y = (slope1) * x + intercept1;

    // Round it Off
    x = Math.round(x * 100) / 100;
    y = Math.round(y * 100) / 100;

    // Draw it on Canvas
    ctx_1.beginPath();
    ctx_1.arc(x * factor + canvas_1.width / 2, -y * factor + canvas_1.height / 2, 2, 0, 2 * Math.PI);
    ctx_1.stroke();

    // Display its Value on Canvas
    ctx_1.fillText("( " + x + ", " + y + ")", x * factor + canvas_1.width / 2 + 6, -y * factor + canvas_1.height / 2);
}