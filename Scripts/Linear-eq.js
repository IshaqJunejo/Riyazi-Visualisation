let yLeft = 0;
let yRight = 0;

let factor = canvas_1.width / 30;
let m;
let n;

updateValues();

function updateValues()
{
    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
    m = parseInt(slider_1.value);
    n = parseInt(slider_2.value);
    yLeft = (160 * m) + n * factor;
    yRight = (-160 * m) + n * factor;
    drawCoordinates();
    drawLine();

    console.log(yLeft);
    console.log(yRight);
}

function drawCoordinates()
{
    // Rectangle Around
    ctx_1.strokeRect(0, 0, canvas_1.width, canvas_1.height);
    
    // X-Axis
    ctx_1.beginPath();
    ctx_1.moveTo(canvas_1.width / 2, 0);
    ctx_1.lineTo(canvas_1.width / 2, canvas_1.height);
    ctx_1.stroke();

    // Y-Axis
    ctx_1.beginPath();
    ctx_1.moveTo(0, canvas_1.height / 2);
    ctx_1.lineTo(canvas_1.width, canvas_1.height / 2);
    ctx_1.stroke();

    // Font
    ctx_1.font = "12px Arial";
    ctx_1.fontAlign = "center";

    for (let i = 0; i <= 30; i++)
    {
        ctx_1.beginPath();
        ctx_1.arc(canvas_1.width / 2, i * factor, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        ctx_1.beginPath();
        ctx_1.arc(i * factor, canvas_1.height / 2, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        if (i % 3 == 0 && i != 0 && i != 15 && i != 30)
        {
            // Numbers on Y-Axis
            ctx_1.fillText((i - 15) * -1, canvas_1.width / 2 + 6, i * factor + 4);

            // Numbers on X-Axis
            ctx_1.fillText((i - 15), i * factor - 6, canvas_1.height / 2 - 4);
        }
    }
}

function drawFunction()
{
    ctx_1.beginPath();
    ctx_1.moveTo(xAtBottom + canvas_1.width / 2, -15 + canvas_1.height / 2);
    ctx_1.lineTo(15 + canvas_1.width / 2, yAtRight + canvas_1.height / 2);
    ctx_1.stroke();

    ctx_1.beginPath();
    ctx_1.arc(xAtBottom + canvas_1.width / 2, (-15 + canvas_1.height / 2) * -1, 5, 0, Math.PI);
    ctx_1.stroke();

    ctx_1.beginPath();
    ctx_1.arc(15 + canvas_1.width / 2, (yAtRight + canvas_1.height / 2) * -1, 5, Math.PI, 2 * Math.PI);
    ctx_1.stroke();

    ctx_1.beginPath();
    ctx_1.moveTo(0, canvas_1.height);
    ctx_1.lineTo(canvas_1.width, 0);
    ctx_1.stroke();
}

function drawLine()
{
    ctx_1.beginPath();
    ctx_1.moveTo(0, -yRight + canvas_1.height / 2);
    ctx_1.lineTo(canvas_1.width, -yLeft + canvas_1.height / 2);
    ctx_1.stroke();
}