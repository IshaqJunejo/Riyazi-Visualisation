let factorX = (canvas_1.width - 12) / 8;
let factorX2 = (canvas_1.width - 12) / 360;
let factorY = canvas_1.height / 5;

let angle;

let output_2 = document.querySelector("#value-2");

updateValues();

function updateValues()
{
    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.width);

    angle = parseInt(slider_1.value);

    if (Math.tan(angle * Math.PI / 180) > 10000)
        output_2.innerHTML = "∞";
    else
        output_2.innerHTML = Math.round(Math.tan(angle * Math.PI / 180) * 1000) / 1000;

    drawGrid();
    drawWave();
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
    ctx_1.moveTo(12, 0);
    ctx_1.lineTo(12, canvas_1.height);
    ctx_1.stroke();

    // Dots on X-Axis of Grid
    for (let i = 0.0; i <= 16; i++)
    {
        ctx_1.beginPath();
        ctx_1.arc(i * factorX / 2 + 12, canvas_1.height / 2, 2, 0, 2 * Math.PI);
        ctx_1.stroke();
    }

    // Dots on Y-Axis of Grid
    for (let i = 0.0; i <= 5; i += 0.2)
    {
        ctx_1.beginPath();
        ctx_1.arc(12, i * factorY, 2, 0, 2 * Math.PI);
        ctx_1.stroke();
    }

    // Numbers on X-Axis of Grid
    for (let i = 1; i < 8; i ++)
    {
        ctx_1.fillText(i * 45, i * factorX + 12 - 6, canvas_1.height / 2 - 4);
    }

    // Numbers on Y-Axis of Grid
    for (let i = 0.5; i < 10.0; i+=1.0)
    {
        if (i != 5.0)
            ctx_1.fillText((i - 5.0) * -1, 12 + 6, i * factorY / 2 + 4);
    }
}

function drawWave()
{
    // Drawing the Tangent Curve
    ctx_1.strokeStyle = "#013220";

    for (let i = 1; i <= angle; i++)
    {
        let y0 = Math.tan((i -1) * Math.PI / 180) * factorY * -0.5 + canvas_1.height / 2;
        let y1 = Math.tan(i * Math.PI / 180) * factorY * -0.5 + canvas_1.height / 2;

        ctx_1.beginPath();
        ctx_1.moveTo((i - 1) * factorX2 + 12, y0);
        ctx_1.lineTo(i * factorX2 + 12, y1);
        ctx_1.stroke();
    }

    // Draw the Dotted Line
    ctx_1.strokeStyle = "#8b0000";

    ctx_1.beginPath();
    ctx_1.setLineDash([1, 2]);
    ctx_1.moveTo(angle * factorX2 + 12, 0);
    ctx_1.lineTo(angle * factorX2 + 12, canvas_1.height);
    ctx_1.stroke();

    ctx_1.setLineDash([0]);
}