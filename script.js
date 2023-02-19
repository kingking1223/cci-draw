function ms(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}


let isDrawing = false;
let latestPoint = null;
const drawArea = document.getElementById("draw-area");
const clearBtn = document.getElementById("clear-btn");

// drawArea.addEventListener("mousedown", startDrawing);
// drawArea.addEventListener("mousemove", draw);
// drawArea.addEventListener("mouseup", stopDrawing);
// drawArea.addEventListener("mouseleave", stopDrawing);
clearBtn.addEventListener("click", erase);

var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

    var x = "white",
        y = 2;
    
    function init() {
        hasThing = false
        canvas = document.getElementById('draw-area');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    }
    
    function color() {
        if (x == "white") y = 14;
    
    }
    
    function draw() {
        hasThing = true;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {
            ctx.clearRect(0, 0, w, h);
    }

    
    function findxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }












let prevtext = ""
let prevw = 25
const myParagraph = document.getElementById("test");
const myList = [
  { text: "Item 1", weight: 25 },
  { text: "Item 2", weight: 25 },
  { text: "Item 3", weight: 25 },
  { text: "Item 4", weight: 25 },
  { text: "Item 5", weight: 25 }
];

function downloadpng() {
  return new Promise((resolve, reject) => {
    const canvas = document.getElementById("draw-area");

    // Create an Image object and set its source to the canvas data URL
    const img = new Image();
    img.src = canvas.toDataURL();

    // Wait for the Image to load before calling drawImage
    img.onload = function() {
    // Create a new canvas to draw the image on
    const downloadCanvas = document.createElement("canvas");
    downloadCanvas.width = canvas.width;
    downloadCanvas.height = canvas.height;
    const context = downloadCanvas.getContext("2d");

    // Draw the image onto the new canvas
    context.drawImage(img, 0, 0);

    // Convert the canvas to a data URL and download it
    if (hasThing) {
      const link = document.createElement("a");
      link.download = `${prevtext}-${25 - prevw}.png`;
      link.href = downloadCanvas.toDataURL();
      link.click();
    }
    resolve()
  };
  })
}

async function changeText() {
  await downloadpng()











  let totalWeight = 0;

  // Calculate total weight and initialize local storage
  for (let i = 0; i < myList.length; i++) {
    const item = myList[i];
    totalWeight += item.weight;

    // Initialize local storage if necessary
    if (!localStorage.getItem(item.text)) {
      localStorage.setItem(item.text, item.weight);
    }
  }

  // Reset weights if all are zero
  if (totalWeight === 0) {
    for (let i = 0; i < myList.length; i++) {
      const item = myList[i];
      localStorage.setItem(item.text, 25);
      item.weight = 100;
      totalWeight += 100;
    }
  }

  // Choose a random item based on weights
  const randomIndex = Math.floor(Math.random() * totalWeight);
  let weightSum = 0;
  let chosenItem = null;

  for (let i = 0; i < myList.length; i++) {
    const item = myList[i];
    weightSum += item.weight;

    if (randomIndex < weightSum) {
      chosenItem = item;
      break;
    }
  }

  // Update weight and local storage for chosen item
  chosenItem.weight--;
  localStorage.setItem(chosenItem.text, chosenItem.weight);

  // Update text content
  myParagraph.textContent = chosenItem.text;
  prevtext = chosenItem.text;
  prevw = chosenItem.weight
  




  drawArea.innerHTML = "";
  latestPoint = null;

  erase()
}









