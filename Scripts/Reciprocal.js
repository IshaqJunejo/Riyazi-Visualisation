let factorX = canvas_1.width / 30;
let factorY = canvas_1.height / 10;
let factor2 = canvas_1.width / 200;

updateValues();

function updateValues()
{
    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);

    multiple = slider_1.value;

    drawCoordinates();
    drawEquation();
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
        ctx_1.arc(i * factorX, canvas_1.height / 2, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        if (i % 3 == 0 && i != 0 && i != 15 && i != 30)
        {
            // Numbers on X-Axis
            ctx_1.fillText((i - 15), i * factorX - 6, canvas_1.height / 2 - 4);
        }
    }

    for (let i = 0; i <= 10; i++)
    {
        // Dots on Y-Axis
        ctx_1.beginPath();
        ctx_1.arc(canvas_1.width / 2, i * factorY, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        if (i % 2 == 0 && i != 0 && i != 5 && i != 10)
        {
            // Numbers on Y-Axis
            ctx_1.fillText((i - 5) * -1, canvas_1.width / 2 + 6, i * factorY + 4);

        }
    }
}

function drawEquation()
{
    ctx_1.strokeStyle = "#8b0000";

    for (let i = 0; i <= canvas_1.width / factor2; i++)
    {        
        let prevX = (i - 1 - 100) / (factorX / factor2);
        let prevY = multiple / prevX;
        let x = (i - 100) / (factorX / factor2);
        let y = multiple / x;

        ctx_1.beginPath();
        //ctx_1.setLineDash([3, 1]);
        ctx_1.moveTo(prevX * factorX + canvas_1.width / 2, -((prevY) * factorY - canvas_1.height / 2));
        ctx_1.lineTo(x * factorX + canvas_1.width / 2, -((y) * factorY - canvas_1.height / 2));
        ctx_1.stroke();

        ctx_1.setLineDash([0]);
    }
}