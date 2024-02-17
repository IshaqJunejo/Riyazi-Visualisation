let multiple;
let yIntercept;

let factorX = canvas_1.width / 30;
let factorY = canvas_1.height / 30;

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

    multiple = slider_1.value;
    yIntercept = slider_2.value;
    
    drawGrid();
    drawEquation();

    if(slider_1.value == 1)
    {output_1.innerHTML = "";}
    else
    {output_1.innerHTML = (" * " + slider_1.value);}
}

function drawGrid()
{
    ctx_1.strokeStyle = "#111";

    // Rectangle Around Canvas
    ctx_1.strokeRect(0, 0, canvas_1.width, canvas_1.height);

    // X-Axis
    ctx_1.beginPath();
    ctx_1.moveTo(0, canvas_1.height - factorX * 5);
    ctx_1.lineTo(canvas_1.width, canvas_1.height - factorX * 5);
    ctx_1.stroke();

    // Y-Axis
    ctx_1.beginPath();
    ctx_1.moveTo(4, 0);
    ctx_1.lineTo(4, canvas_1.height);
    ctx_1.stroke();

    // Font
    ctx_1.font = "12px Arial";
    ctx_1.fontAlign = "center";

    for (let i = 0; i <= 30; i++)
    {
        // Dots on X-Axis
        ctx_1.beginPath();
        ctx_1.arc(i * factorX, canvas_1.height - factorX * 5, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        // Dots on Y-Axis
        ctx_1.beginPath();
        ctx_1.arc(4, i * factorY, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        if (i % 3 == 0 && i != 0 && i != 30)
        {
            // Numbers on X-Axis
            ctx_1.fillText(i, i * factorX - 4, canvas_1.height - factorX * 5 - 6);            
        }

        if ((i - 25) % 3 == 0 && (i - 25) != 0)
        {
            // Numbers on Y-Axis
            ctx_1.fillText((i - 25) * -1, 8, i * factorY + 4);
        }
    }
}

function drawEquation()
{
    ctx_1.strokeStyle = "#013220";

    for (let i = 1.1; i <= canvas_1.width / factorX; i++)
    {
        let prevX = i - 1;
        let prevY = (Math.log(prevX) * multiple) + parseFloat(yIntercept);
        let x = i;
        let y = (Math.log(x) * multiple) + parseFloat(yIntercept);

        ctx_1.beginPath();
        ctx_1.setLineDash([3, 1]);
        ctx_1.moveTo(prevX * factorX + 4, -((prevY + 5) * factorY - canvas_1.height));
        ctx_1.lineTo(x * factorX + 4, -((y + 5) * factorY - canvas_1.height));
        ctx_1.stroke();

        ctx_1.setLineDash([0]);
    }
}