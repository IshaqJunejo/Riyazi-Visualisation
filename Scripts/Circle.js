let canvas_2 = document.querySelector("#canvas-2");

let ctx_2 = canvas_2.getContext("2d");

let factor = canvas_1.width / 1.5;
let factor2 = (canvas_2.width - 12) / 8;
let factor3 = (canvas_2.width - 12) / 360;

let angle;

let output_3 = document.querySelector("#value-3");
let output_4 = document.querySelector("#value-4");

updateValues();

function updateValues()
{
    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
    ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
    angle = parseInt(slider_1.value);

    output_3.innerHTML = Math.round(Math.cos(angle * Math.PI / 180) * 1000) / 1000;
    output_4.innerHTML = Math.round(Math.sin(angle * Math.PI / 180) * 1000) / 1000;

    drawGridCircle();
    drawGridWave();

    drawCircle();
    drawWave();
}

function drawGridCircle()
{
    ctx_1.strokeStyle = "#111";

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

    // Dots on Grid
    for (let i = 0.0; i <= 1.5; i+=0.08333)
    {
        // on Y-Axis
        ctx_1.beginPath();
        ctx_1.arc(canvas_1.width / 2, i * factor, 2, 0, 2 * Math.PI);
        ctx_1.stroke();

        // on X-Axis
        ctx_1.beginPath();
        ctx_1.arc(i * factor, canvas_1.height / 2, 2, 0, 2 * Math.PI);
        ctx_1.stroke();
    }

    // Numbers on Grid
    for (let i = 0.5; i < 3.0; i+=0.5)
    {
        if (i != 1.5)
        {
            // on Y-Axis
            ctx_1.fillText((i - 1.5) * -1, canvas_1.width / 2 + 6, i * factor / 2 + 4);

            // on X-Axis
            ctx_1.fillText((i - 1.5), i * factor / 2 - 6, canvas_1.height / 2 - 4);
        }
    }
}

function drawGridWave()
{
    ctx_2.strokeStyle = "#111";

    // Rectangle Around
    ctx_2.strokeRect(0, 0, canvas_2.width, canvas_2.height);

    // X-Axis
    ctx_2.beginPath();
    ctx_2.moveTo(0, canvas_2.height / 2);
    ctx_2.lineTo(canvas_2.width, canvas_2.height / 2);
    ctx_2.stroke();

    // Y-Axis
    ctx_2.beginPath();
    ctx_2.moveTo(12, 0);
    ctx_2.lineTo(12, canvas_2.height);
    ctx_2.stroke();

    // Dots on Y-Axis of Grid
    for(let i = 0.0; i <= 1.5; i+= 0.08333)
    { 
        ctx_2.beginPath();
        ctx_2.arc(12, i * factor, 2, 0, 2 * Math.PI);
        ctx_2.stroke();
    }

    // Dots on X-Axis of Grid
    for(let i = 0.0; i <= 16; i++)
    {
        ctx_2.beginPath();
        ctx_2.arc(i * factor2 / 2 + 12, canvas_2.height / 2, 2, 0, 2 * Math.PI);
        ctx_2.stroke();
    }

    // Numbers on Y-Axis of Grid
    for (let i = 0.5; i < 3.0; i+=0.5)
    {
        if (i != 1.5)
        {
            ctx_2.fillText((i - 1.5) * -1, 12 + 6, i * factor / 2 + 4);
        }
    }

    for (let i = 1; i < 8; i++)
    {
        ctx_2.fillText(i * 45, i * factor2 + 12 - 6, canvas_2.height / 2 - 4);
    }
}

function drawCircle()
{
    ctx_1.strokeStyle = "#8b0000";

    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, factor / 2, 0, angle * -Math.PI / 180, true);
    ctx_1.stroke();

    ctx_1.beginPath();
    ctx_1.setLineDash([1,2]);
    ctx_1.moveTo(canvas_1.width / 2, canvas_1.height / 2);
    ctx_1.lineTo(canvas_1.width / 2 + Math.cos(angle * -Math.PI / 180) * factor / 2, canvas_1.height / 2 + Math.sin(angle * -Math.PI / 180) * factor / 2);
    ctx_1.stroke();

    ctx_1.setLineDash([0]);

    ctx_1.strokeStyle = "#111";

    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2 + Math.cos(angle * -Math.PI / 180) * factor / 2, canvas_1.height / 2 + Math.sin(angle * -Math.PI / 180) * factor / 2, 2, 0, 2 * Math.PI);
    ctx_1.stroke();

    ctx_1.strokeStyle = "#013220";

    ctx_1.beginPath();
    ctx_1.moveTo(canvas_1.width / 2 + Math.cos(angle * -Math.PI / 180) * factor / 2, canvas_1.height / 2);
    ctx_1.lineTo(canvas_1.width / 2 + Math.cos(angle * -Math.PI / 180) * factor / 2, canvas_1.height / 2 + Math.sin(angle * -Math.PI / 180) * factor / 2);
    ctx_1.stroke();

    ctx_1.strokeStyle = "#00008B";

    ctx_1.beginPath();
    ctx_1.moveTo(canvas_1.width / 2, canvas_1.height / 2 + Math.sin(angle * -Math.PI / 180) * factor / 2);
    ctx_1.lineTo(canvas_1.width / 2 + Math.cos(angle * -Math.PI / 180) * factor / 2, canvas_1.height / 2 + Math.sin(angle * -Math.PI / 180) * factor / 2);
    ctx_1.stroke();
}

function drawWave()
{
    ctx_2.strokeStyle = "#013220";

    for (let i = 1; i <= angle; i++)
    {
        let y1 = Math.sin(i * Math.PI / 180) * factor * -0.5 + canvas_2.height / 2;
        let y0 = Math.sin((i - 1) * Math.PI / 180) * factor * -0.5 + canvas_2.height / 2;

        ctx_2.beginPath();
        ctx_2.moveTo((i - 1) * factor3 + 12, y0);
        ctx_2.lineTo(i * factor3 + 12, y1);
        ctx_2.stroke();
    }

    ctx_2.strokeStyle = "#00008B";

    for (let i = 1; i <= angle; i++)
    {
        let y1 = Math.cos(i * Math.PI / 180) * factor * -0.5 + canvas_2.height / 2;
        let y0 = Math.cos((i - 1) * Math.PI / 180) * factor * -0.5 + canvas_2.height / 2;

        ctx_2.beginPath();
        ctx_2.moveTo((i - 1) * factor3 + 12, y0);
        ctx_2.lineTo(i * factor3 + 12, y1);
        ctx_2.stroke();
    }

    ctx_2.strokeStyle = "#8b0000";

    ctx_2.beginPath();
    ctx_2.setLineDash([1,2]);
    ctx_2.moveTo(angle * factor3 + 12, 0);
    ctx_2.lineTo(angle * factor3 + 12, canvas_2.height);
    ctx_2.stroke();

    ctx_2.setLineDash([0]);
}