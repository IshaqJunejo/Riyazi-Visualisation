// Canvas
let canvas_2 = document.querySelector("#canvas-2");

let ctx_2 = canvas_2.getContext("2d");

let slider_2 = document.querySelector("#slider-2");
let output_2 = document.querySelector("#value-2");
output_2.innerHTML = slider_2.value;

let output_3 = document.querySelector("#value-3");
let output_4 = document.querySelector("#value-4");

let perp = parseInt(output_1.innerHTML);
let base = parseInt(output_2.innerHTML);

output_3.innerHTML = perp * perp;
output_4.innerHTML = base * base;

updateValues();

slider_2.oninput = function()
{
    output_2.innerHTML = this.value;
    updateValues();
}

// Function to update all the values needed
function updateValues()
{
    perp = parseInt(output_1.innerHTML);
    base = parseInt(output_2.innerHTML);
    output_3.innerHTML = perp * perp;
    output_4.innerHTML = base * base;
    canvas_1.width = 320;
    canvas_1.height = 320;
    canvas_2.width = 320;
    canvas_2.height = 320;
    offset = (canvas_1.width - (base + perp)) / 2;
    drawTriangles_1();
    drawTriangles_2();
}

// Drawing Triangles on First Canvas
function drawTriangles_1()
{
    ctx_1.strokeRect(0, 0, canvas_1.width, canvas_1.height);
    ctx_1.strokeRect(offset, offset, (base + perp), (base + perp));

    ctx_1.font = "12px Arial";
    ctx_1.textAlign = "center";
    ctx_1.fillText("Hyp²", canvas_1.width / 2, canvas_1.height / 2 - 6);
    ctx_1.fillText(perp*perp + base*base, canvas_1.width / 2, canvas_1.height / 2 + 6);
    ctx_1.fillText("Base", offset - 20, offset + base / 2);
    ctx_1.fillText("Perp", offset + perp / 2, offset - 10);
    ctx_1.fillText("Base", offset + perp + base / 2, offset - 10);
    ctx_1.fillText("Perp", offset + base + perp + 20, offset + perp / 2);
    ctx_1.fillText("Base", offset + base + perp + 20, offset + perp + base / 2);
    ctx_1.fillText("Perp", offset + base + perp / 2, offset + base + perp + 15);
    ctx_1.fillText("Base", offset + base / 2, offset + base + perp + 15);
    ctx_1.fillText("Perp", offset - 20, offset + base + perp / 2);

    ctx_1.beginPath();
    ctx_1.moveTo(offset + 0, 0 + offset);
    ctx_1.lineTo(offset + perp, 0 + offset);
    ctx_1.lineTo(offset + 0, base + offset);
    ctx_1.closePath();
    ctx_1.stroke();

    ctx_1.beginPath();
    ctx_1.moveTo(offset + perp, 0 + offset);
    ctx_1.lineTo(offset + (base + perp), 0 + offset);
    ctx_1.lineTo(offset + (base + perp), perp + offset);
    ctx_1.closePath();
    ctx_1.stroke();

    ctx_1.beginPath();
    ctx_1.moveTo(offset + (base + perp), perp + offset);
    ctx_1.lineTo(offset + (base + perp), (base + perp) + offset);
    ctx_1.lineTo(offset + base, (base + perp) + offset);
    ctx_1.closePath();
    ctx_1.stroke();

    ctx_1.beginPath();
    ctx_1.moveTo(offset + base, (base + perp) + offset);
    ctx_1.lineTo(offset + 0, (base + perp) + offset);
    ctx_1.lineTo(offset + 0, base + offset);
    ctx_1.closePath();
    ctx_1.stroke();
}

// Drawing Triangle on Second Canvas
function drawTriangles_2()
{
    ctx_2.strokeRect(0, 0, canvas_2.width, canvas_2.height);
    ctx_2.strokeRect(offset, offset, (base + perp), (base + perp));

    ctx_2.font = "12px Arial";
    ctx_2.textAlign = "center";
    ctx_2.fillText("Base", offset - 20, offset + base / 2);
    ctx_2.fillText("Perp", offset + perp / 2, offset - 10);
    ctx_2.fillText("Base", offset + perp + base / 2, offset - 10);
    ctx_2.fillText("Base", offset + base + perp + 20, offset + base / 2);
    ctx_2.fillText("Perp", offset + base + perp + 20, offset + base + perp / 2);
    ctx_2.fillText("Base", offset + perp + base / 2, offset + base + perp + 15);
    ctx_2.fillText("Perp", offset + perp / 2, offset + base + perp + 15);
    ctx_2.fillText("Perp", offset - 20, offset + base + perp / 2);
    ctx_2.fillText("Base²", offset + perp + base / 2, offset + base / 2 - 6);
    ctx_2.fillText(base*base, offset + perp + base / 2, offset + base / 2 + 6);
    ctx_2.fillText("Perp²", offset + perp / 2, offset + base + perp / 2 - 6);
    ctx_2.fillText(perp*perp, offset + perp / 2, offset + base + perp / 2 + 6);

    ctx_2.beginPath();
    ctx_2.moveTo(offset + 0, 0 + offset);
    ctx_2.lineTo(offset + perp, 0 + offset);
    ctx_2.lineTo(offset + 0, base + offset);
    ctx_2.closePath();
    ctx_2.stroke();

    ctx_2.beginPath();
    ctx_2.moveTo(offset + 0, base + offset);
    ctx_2.lineTo(offset + perp, base + offset);
    ctx_2.lineTo(offset + perp, 0 + offset);
    ctx_2.closePath();
    ctx_2.stroke();

    ctx_2.beginPath();
    ctx_2.moveTo(offset + perp, base + offset);
    ctx_2.lineTo(offset + (base + perp), base + offset);
    ctx_2.lineTo(offset + (base + perp), (base + perp) + offset);
    ctx_2.closePath();
    ctx_2.stroke();

    ctx_2.beginPath();
    ctx_2.moveTo(offset + perp, base + offset);
    ctx_2.lineTo(offset + perp, (base + perp) + offset);
    ctx_2.lineTo(offset + (base + perp), (base + perp) + offset);
    ctx_2.closePath();
    ctx_2.stroke();
}