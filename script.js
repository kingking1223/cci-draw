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
  { text: "\u4E00", weight: 25 }, // 4E00
  { text: "\u4E01", weight: 25 },
  { text: "\u4E02", weight: 25 },
  { text: "\u4E03", weight: 25 },
  { text: "\u4E04", weight: 25 },
  { text: "\u4E05", weight: 25 },
  { text: "\u4E06", weight: 25 },
  { text: "\u4E07", weight: 25 },
  { text: "\u4E08", weight: 25 },
  { text: "\u4E09", weight: 25 },
  { text: "\u4E0A", weight: 25 },
  { text: "\u4E0B", weight: 25 },
  { text: "\u4E0C", weight: 25 },
  { text: "\u4E0D", weight: 25 },
  { text: "\u4E0E", weight: 25 },
  { text: "\u4E0F", weight: 25 },
  { text: "\u4E10", weight: 25 },
  { text: "\u4E11", weight: 25 },
  { text: "\u4E12", weight: 25 },
  { text: "\u4E13", weight: 25 },
  { text: "\u4E14", weight: 25 },
  { text: "\u4E15", weight: 25 },
  { text: "\u4E16", weight: 25 },
  { text: "\u4E17", weight: 25 },
  { text: "\u4E18", weight: 25 },
  { text: "\u4E19", weight: 25 },
  { text: "\u4E1A", weight: 25 },
  { text: "\u4E1B", weight: 25 },
  { text: "\u4E1C", weight: 25 },
  { text: "\u4E1D", weight: 25 },
  { text: "\u4E1E", weight: 25 },
  { text: "\u4E1F", weight: 25 },
  { text: "\u4E20", weight: 25 },
  { text: "\u4E21", weight: 25 },
  { text: "\u4E22", weight: 25 },
  { text: "\u4E23", weight: 25 },
  { text: "\u4E24", weight: 25 },
  { text: "\u4E25", weight: 25 },
  { text: "\u4E26", weight: 25 },
  { text: "\u4E27", weight: 25 },
  { text: "\u4E28", weight: 25 },
  { text: "\u4E29", weight: 25 },
  { text: "\u4E2A", weight: 25 },
  { text: "\u4E2B", weight: 25 },
  { text: "\u4E2C", weight: 25 },
  { text: "\u4E2D", weight: 25 },
  { text: "\u4E2E", weight: 25 },
  { text: "\u4E2F", weight: 25 },
  { text: "\u4E30", weight: 25 },
  { text: "\u4E31", weight: 25 },
  { text: "\u4E32", weight: 25 },
  { text: "\u4E33", weight: 25 },
  { text: "\u4E34", weight: 25 },
  { text: "\u4E35", weight: 25 },
  { text: "\u4E36", weight: 25 },
  { text: "\u4E37", weight: 25 },
  { text: "\u4E38", weight: 25 },
  { text: "\u4E39", weight: 25 },
  { text: "\u4E3A", weight: 25 },
  { text: "\u4E3B", weight: 25 },
  { text: "\u4E3C", weight: 25 },
  { text: "\u4E3D", weight: 25 },
  { text: "\u4E3E", weight: 25 },
  { text: "\u4E3F", weight: 25 },
  { text: "\u4E40", weight: 25 },
  { text: "\u4E41", weight: 25 },
  { text: "\u4E42", weight: 25 },
  { text: "\u4E43", weight: 25 },
  { text: "\u4E44", weight: 25 },
  { text: "\u4E45", weight: 25 },
  { text: "\u4E46", weight: 25 },
  { text: "\u4E47", weight: 25 },
  { text: "\u4E48", weight: 25 },
  { text: "\u4E49", weight: 25 },
  { text: "\u4E4A", weight: 25 },
  { text: "\u4E4B", weight: 25 },
  { text: "\u4E4C", weight: 25 },
  { text: "\u4E4D", weight: 25 },
  { text: "\u4E4E", weight: 25 },
  { text: "\u4E4F", weight: 25 },
  { text: "\u4E50", weight: 25 },
  { text: "\u4E51", weight: 25 },
  { text: "\u4E52", weight: 25 },
  { text: "\u4E53", weight: 25 },
  { text: "\u4E54", weight: 25 },
  { text: "\u4E55", weight: 25 },
  { text: "\u4E56", weight: 25 },
  { text: "\u4E57", weight: 25 },
  { text: "\u4E58", weight: 25 },
  { text: "\u4E59", weight: 25 },
  { text: "\u4E5A", weight: 25 },
  { text: "\u4E5B", weight: 25 },
  { text: "\u4E5C", weight: 25 },
  { text: "\u4E5D", weight: 25 },
  { text: "\u4E5E", weight: 25 },
  { text: "\u4E5F", weight: 25 },
  { text: "\u4E60", weight: 25 },
  { text: "\u4E61", weight: 25 },
  { text: "\u4E62", weight: 25 },
  { text: "\u4E63", weight: 25 },
  { text: "\u4E64", weight: 25 },
  { text: "\u4E65", weight: 25 },
  { text: "\u4E66", weight: 25 },
  { text: "\u4E67", weight: 25 },
  { text: "\u4E68", weight: 25 },
  { text: "\u4E69", weight: 25 },
  { text: "\u4E6A", weight: 25 },
  { text: "\u4E6B", weight: 25 },
  { text: "\u4E6C", weight: 25 },
  { text: "\u4E6D", weight: 25 },
  { text: "\u4E6E", weight: 25 },
  { text: "\u4E6F", weight: 25 },
  { text: "\u4E70", weight: 25 },
  { text: "\u4E71", weight: 25 },
  { text: "\u4E72", weight: 25 },
  { text: "\u4E73", weight: 25 },
  { text: "\u4E74", weight: 25 },
  { text: "\u4E75", weight: 25 },
  { text: "\u4E76", weight: 25 },
  { text: "\u4E77", weight: 25 },
  { text: "\u4E78", weight: 25 },
  { text: "\u4E79", weight: 25 },
  { text: "\u4E7A", weight: 25 },
  { text: "\u4E7B", weight: 25 },
  { text: "\u4E7C", weight: 25 },
  { text: "\u4E7D", weight: 25 },
  { text: "\u4E7E", weight: 25 },
  { text: "\u4E7F", weight: 25 },
  { text: "\u4E80", weight: 25 },
  { text: "\u4E81", weight: 25 },
  { text: "\u4E82", weight: 25 },
  { text: "\u4E83", weight: 25 },
  { text: "\u4E84", weight: 25 },
  { text: "\u4E85", weight: 25 },
  { text: "\u4E86", weight: 25 },
  { text: "\u4E87", weight: 25 },
  { text: "\u4E88", weight: 25 },
  { text: "\u4E89", weight: 25 },
  { text: "\u4E8A", weight: 25 },
  { text: "\u4E8B", weight: 25 },
  { text: "\u4E8C", weight: 25 },
  { text: "\u4E8D", weight: 25 },
  { text: "\u4E8E", weight: 25 },
  { text: "\u4E8F", weight: 25 },
  { text: "\u4E90", weight: 25 },
  { text: "\u4E91", weight: 25 },
  { text: "\u4E92", weight: 25 },
  { text: "\u4E93", weight: 25 },
  { text: "\u4E94", weight: 25 },
  { text: "\u4E95", weight: 25 },
  { text: "\u4E96", weight: 25 },
  { text: "\u4E97", weight: 25 },
  { text: "\u4E98", weight: 25 },
  { text: "\u4E99", weight: 25 },
  { text: "\u4E9A", weight: 25 },
  { text: "\u4E9B", weight: 25 },
  { text: "\u4E9C", weight: 25 },
  { text: "\u4E9D", weight: 25 },
  { text: "\u4E9E", weight: 25 },
  { text: "\u4E9F", weight: 25 },
  { text: "\u4EA0", weight: 25 },
  { text: "\u4EA1", weight: 25 },
  { text: "\u4EA2", weight: 25 },
  { text: "\u4EA3", weight: 25 },
  { text: "\u4EA4", weight: 25 },
  { text: "\u4EA5", weight: 25 },
  { text: "\u4EA6", weight: 25 },
  { text: "\u4EA7", weight: 25 },
  { text: "\u4EA8", weight: 25 },
  { text: "\u4EA9", weight: 25 },
  { text: "\u4EAA", weight: 25 },
  { text: "\u4EAB", weight: 25 },
  { text: "\u4EAC", weight: 25 },
  { text: "\u4EAD", weight: 25 },
  { text: "\u4EAE", weight: 25 },
  { text: "\u4EAF", weight: 25 },
  { text: "\u4EB0", weight: 25 },
  { text: "\u4EB1", weight: 25 },
  { text: "\u4EB2", weight: 25 },
  { text: "\u4EB3", weight: 25 },
  { text: "\u4EB4", weight: 25 },
  { text: "\u4EB5", weight: 25 },
  { text: "\u4EB6", weight: 25 },
  { text: "\u4EB7", weight: 25 },
  { text: "\u4EB8", weight: 25 },
  { text: "\u4EB9", weight: 25 },
  { text: "\u4EBA", weight: 25 },
  { text: "\u4EBB", weight: 25 },
  { text: "\u4EBC", weight: 25 },
  { text: "\u4EBD", weight: 25 },
  { text: "\u4EBE", weight: 25 },
  { text: "\u4EBF", weight: 25 },
  { text: "\u4EC0", weight: 25 },
  { text: "\u4EC1", weight: 25 },
  { text: "\u4EC2", weight: 25 },
  { text: "\u4EC3", weight: 25 },
  { text: "\u4EC4", weight: 25 },
  { text: "\u4EC5", weight: 25 },
  { text: "\u4EC6", weight: 25 },
  { text: "\u4EC7", weight: 25 },
  { text: "\u4EC8", weight: 25 },
  { text: "\u4EC9", weight: 25 },
  { text: "\u4ECA", weight: 25 },
  { text: "\u4ECB", weight: 25 },
  { text: "\u4ECC", weight: 25 },
  { text: "\u4ECD", weight: 25 },
  { text: "\u4ECE", weight: 25 },
  { text: "\u4ECF", weight: 25 },
  { text: "\u4ED0", weight: 25 },
  { text: "\u4ED1", weight: 25 },
  { text: "\u4ED2", weight: 25 },
  { text: "\u4ED3", weight: 25 },
  { text: "\u4ED4", weight: 25 },
  { text: "\u4ED5", weight: 25 },
  { text: "\u4ED6", weight: 25 },
  { text: "\u4ED7", weight: 25 },
  { text: "\u4ED8", weight: 25 },
  { text: "\u4ED9", weight: 25 },
  { text: "\u4EDA", weight: 25 },
  { text: "\u4EDB", weight: 25 },
  { text: "\u4EDC", weight: 25 },
  { text: "\u4EDD", weight: 25 },
  { text: "\u4EDE", weight: 25 },
  { text: "\u4EDF", weight: 25 },
  { text: "\u4EE0", weight: 25 },
  { text: "\u4EE1", weight: 25 },
  { text: "\u4EE2", weight: 25 },
  { text: "\u4EE3", weight: 25 },
  { text: "\u4EE4", weight: 25 },
  { text: "\u4EE5", weight: 25 },
  { text: "\u4EE6", weight: 25 },
  { text: "\u4EE7", weight: 25 },
  { text: "\u4EE8", weight: 25 },
  { text: "\u4EE9", weight: 25 },
  { text: "\u4EEA", weight: 25 },
  { text: "\u4EEB", weight: 25 },
  { text: "\u4EEC", weight: 25 },
  { text: "\u4EED", weight: 25 },
  { text: "\u4EEE", weight: 25 },
  { text: "\u4EEF", weight: 25 },
  { text: "\u4EF0", weight: 25 },
  { text: "\u4EF1", weight: 25 },
  { text: "\u4EF2", weight: 25 },
  { text: "\u4EF3", weight: 25 },
  { text: "\u4EF4", weight: 25 },
  { text: "\u4EF5", weight: 25 },
  { text: "\u4EF6", weight: 25 },
  { text: "\u4EF7", weight: 25 },
  { text: "\u4EF8", weight: 25 },
  { text: "\u4EF9", weight: 25 },
  { text: "\u4EFA", weight: 25 },
  { text: "\u4EFB", weight: 25 },
  { text: "\u4EFC", weight: 25 },
  { text: "\u4EFD", weight: 25 },
  { text: "\u4EFE", weight: 25 },
  { text: "\u4EFF", weight: 25 },
  { text: "\u4F00", weight: 25 },
  { text: "\u4F01", weight: 25 },
  { text: "\u4F02", weight: 25 },
  { text: "\u4F03", weight: 25 },
  { text: "\u4F04", weight: 25 },
  { text: "\u4F05", weight: 25 },
  { text: "\u4F06", weight: 25 },
  { text: "\u4F07", weight: 25 },
  { text: "\u4F08", weight: 25 },
  { text: "\u4F09", weight: 25 },
  { text: "\u4F0A", weight: 25 },
  { text: "\u4F0B", weight: 25 },
  { text: "\u4F0C", weight: 25 },
  { text: "\u4F0D", weight: 25 },
  { text: "\u4F0E", weight: 25 },
  { text: "\u4F0F", weight: 25 },
  { text: "\u4F10", weight: 25 },
  { text: "\u4F11", weight: 25 },
  { text: "\u4F12", weight: 25 },
  { text: "\u4F13", weight: 25 },
  { text: "\u4F14", weight: 25 },
  { text: "\u4F15", weight: 25 },
  { text: "\u4F16", weight: 25 },
  { text: "\u4F17", weight: 25 },
  { text: "\u4F18", weight: 25 },
  { text: "\u4F19", weight: 25 },
  { text: "\u4F1A", weight: 25 },
  { text: "\u4F1B", weight: 25 },
  { text: "\u4F1C", weight: 25 },
  { text: "\u4F1D", weight: 25 },
  { text: "\u4F1E", weight: 25 },
  { text: "\u4F1F", weight: 25 },
  { text: "\u4F20", weight: 25 },
  { text: "\u4F21", weight: 25 },
  { text: "\u4F22", weight: 25 },
  { text: "\u4F23", weight: 25 },
  { text: "\u4F24", weight: 25 },
  { text: "\u4F25", weight: 25 },
  { text: "\u4F26", weight: 25 },
  { text: "\u4F27", weight: 25 },
  { text: "\u4F28", weight: 25 },
  { text: "\u4F29", weight: 25 },
  { text: "\u4F2A", weight: 25 },
  { text: "\u4F2B", weight: 25 },
  { text: "\u4F2C", weight: 25 },
  { text: "\u4F2D", weight: 25 },
  { text: "\u4F2E", weight: 25 },
  { text: "\u4F2F", weight: 25 },
  { text: "\u4F30", weight: 25 },
  { text: "\u4F31", weight: 25 },
  { text: "\u4F32", weight: 25 },
  { text: "\u4F33", weight: 25 },
  { text: "\u4F34", weight: 25 },
  { text: "\u4F35", weight: 25 },
  { text: "\u4F36", weight: 25 },
  { text: "\u4F37", weight: 25 },
  { text: "\u4F38", weight: 25 },
  { text: "\u4F39", weight: 25 },
  { text: "\u4F3A", weight: 25 },
  { text: "\u4F3B", weight: 25 },
  { text: "\u4F3C", weight: 25 },
  { text: "\u4F3D", weight: 25 },
  { text: "\u4F3E", weight: 25 },
  { text: "\u4F3F", weight: 25 },
  { text: "\u4F40", weight: 25 },
  { text: "\u4F41", weight: 25 },
  { text: "\u4F42", weight: 25 },
  { text: "\u4F43", weight: 25 },
  { text: "\u4F44", weight: 25 },
  { text: "\u4F45", weight: 25 },
  { text: "\u4F46", weight: 25 },
  { text: "\u4F47", weight: 25 },
  { text: "\u4F48", weight: 25 },
  { text: "\u4F49", weight: 25 },
  { text: "\u4F4A", weight: 25 },
  { text: "\u4F4B", weight: 25 },
  { text: "\u4F4C", weight: 25 },
  { text: "\u4F4D", weight: 25 },
  { text: "\u4F4E", weight: 25 },
  { text: "\u4F4F", weight: 25 },
  { text: "\u4F50", weight: 25 },
  { text: "\u4F51", weight: 25 },
  { text: "\u4F52", weight: 25 },
  { text: "\u4F53", weight: 25 },
  { text: "\u4F54", weight: 25 },
  { text: "\u4F55", weight: 25 },
  { text: "\u4F56", weight: 25 },
  { text: "\u4F57", weight: 25 },
  { text: "\u4F58", weight: 25 },
  { text: "\u4F59", weight: 25 },
  { text: "\u4F5A", weight: 25 },
  { text: "\u4F5B", weight: 25 },
  { text: "\u4F5C", weight: 25 },
  { text: "\u4F5D", weight: 25 },
  { text: "\u4F5E", weight: 25 },
  { text: "\u4F5F", weight: 25 },
  { text: "\u4F60", weight: 25 },
  { text: "\u4F61", weight: 25 },
  { text: "\u4F62", weight: 25 },
  { text: "\u4F63", weight: 25 },
  { text: "\u4F64", weight: 25 },
  { text: "\u4F65", weight: 25 },
  { text: "\u4F66", weight: 25 },
  { text: "\u4F67", weight: 25 },
  { text: "\u4F68", weight: 25 },
  { text: "\u4F69", weight: 25 },
  { text: "\u4F6A", weight: 25 },
  { text: "\u4F6B", weight: 25 },
  { text: "\u4F6C", weight: 25 },
  { text: "\u4F6D", weight: 25 },
  { text: "\u4F6E", weight: 25 },
  { text: "\u4F6F", weight: 25 },
  { text: "\u4F70", weight: 25 },
  { text: "\u4F71", weight: 25 },
  { text: "\u4F72", weight: 25 },
  { text: "\u4F73", weight: 25 },
  { text: "\u4F74", weight: 25 },
  { text: "\u4F75", weight: 25 },
  { text: "\u4F76", weight: 25 },
  { text: "\u4F77", weight: 25 },
  { text: "\u4F78", weight: 25 },
  { text: "\u4F79", weight: 25 },
  { text: "\u4F7A", weight: 25 },
  { text: "\u4F7B", weight: 25 },
  { text: "\u4F7C", weight: 25 },
  { text: "\u4F7D", weight: 25 },
  { text: "\u4F7E", weight: 25 },
  { text: "\u4F7F", weight: 25 },
  { text: "\u4880", weight: 25 },
  { text: "\u4F81", weight: 25 },
  { text: "\u4F82", weight: 25 },
  { text: "\u4F83", weight: 25 },
  { text: "\u4F84", weight: 25 },
  { text: "\u4F85", weight: 25 },
  { text: "\u4F86", weight: 25 },
  { text: "\u4F87", weight: 25 },
  { text: "\u4F88", weight: 25 },
  { text: "\u4F89", weight: 25 },
  { text: "\u4F8A", weight: 25 },
  { text: "\u4F8B", weight: 25 },
  { text: "\u4F8C", weight: 25 },
  { text: "\u4F8D", weight: 25 },
  { text: "\u4F8E", weight: 25 },
  { text: "\u4F8F", weight: 25 },
  { text: "\u4F90", weight: 25 },
  { text: "\u4F91", weight: 25 },
  { text: "\u4F92", weight: 25 },
  { text: "\u4F93", weight: 25 },
  { text: "\u4F94", weight: 25 },
  { text: "\u4F95", weight: 25 },
  { text: "\u4F96", weight: 25 },
  { text: "\u4F97", weight: 25 },
  { text: "\u4F98", weight: 25 },
  { text: "\u4F99", weight: 25 },
  { text: "\u4F9A", weight: 25 },
  { text: "\u4F9B", weight: 25 },
  { text: "\u4F9C", weight: 25 },
  { text: "\u4F9D", weight: 25 },
  { text: "\u4F9E", weight: 25 },
  { text: "\u4F9F", weight: 25 },
  { text: "\u4FA0", weight: 25 },
  { text: "\u4FA1", weight: 25 },
  { text: "\u4FA2", weight: 25 },
  { text: "\u4FA3", weight: 25 },
  { text: "\u4FA4", weight: 25 },
  { text: "\u4FA5", weight: 25 },
  { text: "\u4FA6", weight: 25 },
  { text: "\u4FA7", weight: 25 },
  { text: "\u4FA8", weight: 25 },
  { text: "\u4FA9", weight: 25 },
  { text: "\u4FAA", weight: 25 },
  { text: "\u4FAB", weight: 25 },
  { text: "\u4FAC", weight: 25 },
  { text: "\u4FAD", weight: 25 },
  { text: "\u4FAE", weight: 25 },
  { text: "\u4FAF", weight: 25 },
  { text: "\u4FB0", weight: 25 },
  { text: "\u4FB1", weight: 25 },
  { text: "\u4FB2", weight: 25 },
  { text: "\u4FB3", weight: 25 },
  { text: "\u4FB4", weight: 25 },
  { text: "\u4FB5", weight: 25 },
  { text: "\u4FB6", weight: 25 },
  { text: "\u4FB7", weight: 25 },
  { text: "\u4FB8", weight: 25 },
  { text: "\u4FB9", weight: 25 },
  { text: "\u4FBA", weight: 25 },
  { text: "\u4FBB", weight: 25 },
  { text: "\u4FBC", weight: 25 },
  { text: "\u4FBD", weight: 25 },
  { text: "\u4FBE", weight: 25 },
  { text: "\u4FBF", weight: 25 },
  { text: "\u4FC0", weight: 25 },
  { text: "\u4FC1", weight: 25 },
  { text: "\u4FC2", weight: 25 },
  { text: "\u4FC3", weight: 25 },
  { text: "\u4FC4", weight: 25 },
  { text: "\u4FC5", weight: 25 },
  { text: "\u4FC6", weight: 25 },
  { text: "\u4FC7", weight: 25 },
  { text: "\u4FC8", weight: 25 },
  { text: "\u4FC9", weight: 25 },
  { text: "\u4FCA", weight: 25 },
  { text: "\u4FCB", weight: 25 },
  { text: "\u4FCC", weight: 25 },
  { text: "\u4FCD", weight: 25 },
  { text: "\u4FCE", weight: 25 },
  { text: "\u4FCF", weight: 25 },
  { text: "\u4FD0", weight: 25 },
  { text: "\u4FD1", weight: 25 },
  { text: "\u4FD2", weight: 25 },
  { text: "\u4FD3", weight: 25 },
  { text: "\u4FD4", weight: 25 },
  { text: "\u4FD5", weight: 25 },
  { text: "\u4FD6", weight: 25 },
  { text: "\u4FD7", weight: 25 },
  { text: "\u4FD8", weight: 25 },
  { text: "\u4FD9", weight: 25 },
  { text: "\u4FDA", weight: 25 },
  { text: "\u4FDB", weight: 25 },
  { text: "\u4FDC", weight: 25 },
  { text: "\u4FDD", weight: 25 },
  { text: "\u4FDE", weight: 25 },
  { text: "\u4FDF", weight: 25 },
  { text: "\u4FE0", weight: 25 },
  { text: "\u4FE1", weight: 25 },
  { text: "\u4FE2", weight: 25 },
  { text: "\u4FE3", weight: 25 },
  { text: "\u4FE4", weight: 25 },
  { text: "\u4FE5", weight: 25 },
  { text: "\u4FE6", weight: 25 },
  { text: "\u4FE7", weight: 25 },
  { text: "\u4FE8", weight: 25 },
  { text: "\u4FE9", weight: 25 },
  { text: "\u4FEA", weight: 25 },
  { text: "\u4FEB", weight: 25 },
  { text: "\u4FEC", weight: 25 },
  { text: "\u4FED", weight: 25 },
  { text: "\u4FEE", weight: 25 },
  { text: "\u4FEF", weight: 25 },
  { text: "\u4FF0", weight: 25 },
  { text: "\u4FF1", weight: 25 },
  { text: "\u4FF2", weight: 25 },
  { text: "\u4FF3", weight: 25 },
  { text: "\u4FF4", weight: 25 },
  { text: "\u4FF5", weight: 25 },
  { text: "\u4FF6", weight: 25 },
  { text: "\u4FF7", weight: 25 },
  { text: "\u4FF8", weight: 25 },
  { text: "\u4FF9", weight: 25 },
  { text: "\u4FFA", weight: 25 },
  { text: "\u4FFB", weight: 25 },
  { text: "\u4FFC", weight: 25 },
  { text: "\u4FFD", weight: 25 },
  { text: "\u4FFE", weight: 25 },
  { text: "\u4FFF", weight: 25 },
  { text: "\u5000", weight: 25 },
  { text: "\u5001", weight: 25 },
  { text: "\u5002", weight: 25 },
  { text: "\u5003", weight: 25 },
  { text: "\u5004", weight: 25 },
  { text: "\u5005", weight: 25 },
  { text: "\u5006", weight: 25 },
  { text: "\u5007", weight: 25 },
  { text: "\u5008", weight: 25 },
  { text: "\u5009", weight: 25 },
  { text: "\u500A", weight: 25 },
  { text: "\u500B", weight: 25 },
  { text: "\u500C", weight: 25 },
  { text: "\u500D", weight: 25 },
  { text: "\u500E", weight: 25 },
  { text: "\u500F", weight: 25 },
  { text: "\u5010", weight: 25 },
  { text: "\u5011", weight: 25 },
  { text: "\u5012", weight: 25 },
  { text: "\u5013", weight: 25 },
  { text: "\u5014", weight: 25 },
  { text: "\u5015", weight: 25 },
  { text: "\u5016", weight: 25 },
  { text: "\u5017", weight: 25 },
  { text: "\u5018", weight: 25 },
  { text: "\u5019", weight: 25 },
  { text: "\u501A", weight: 25 },
  { text: "\u501B", weight: 25 },
  { text: "\u501C", weight: 25 },
  { text: "\u501D", weight: 25 },
  { text: "\u501E", weight: 25 },
  { text: "\u501F", weight: 25 },
  { text: "\u5020", weight: 25 },
  { text: "\u5021", weight: 25 },
  { text: "\u5022", weight: 25 },
  { text: "\u5023", weight: 25 },
  { text: "\u5024", weight: 25 },
  { text: "\u5025", weight: 25 },
  { text: "\u5026", weight: 25 },
  { text: "\u5027", weight: 25 },
  { text: "\u5028", weight: 25 },
  { text: "\u5029", weight: 25 },
  { text: "\u502A", weight: 25 },
  { text: "\u502B", weight: 25 },
  { text: "\u502C", weight: 25 },
  { text: "\u502D", weight: 25 },
  { text: "\u502E", weight: 25 },
  { text: "\u502F", weight: 25 },
  { text: "\u5030", weight: 25 },
  { text: "\u5031", weight: 25 },
  { text: "\u5032", weight: 25 },
  { text: "\u5033", weight: 25 },
  { text: "\u5034", weight: 25 },
  { text: "\u5035", weight: 25 },
  { text: "\u5036", weight: 25 },
  { text: "\u5037", weight: 25 },
  { text: "\u5038", weight: 25 },
  { text: "\u5039", weight: 25 },
  { text: "\u503A", weight: 25 },
  { text: "\u503B", weight: 25 },
  { text: "\u503C", weight: 25 },
  { text: "\u503D", weight: 25 },
  { text: "\u503E", weight: 25 },
  { text: "\u503F", weight: 25 },
  { text: "\u5040", weight: 25 },
  { text: "\u5041", weight: 25 },
  { text: "\u5042", weight: 25 },
  { text: "\u5043", weight: 25 },
  { text: "\u5044", weight: 25 },
  { text: "\u5045", weight: 25 },
  { text: "\u5046", weight: 25 },
  { text: "\u5047", weight: 25 },
  { text: "\u5048", weight: 25 },
  { text: "\u5049", weight: 25 },
  { text: "\u504A", weight: 25 },
  { text: "\u504B", weight: 25 },
  { text: "\u504C", weight: 25 },
  { text: "\u504D", weight: 25 },
  { text: "\u504E", weight: 25 },
  { text: "\u504F", weight: 25 },
  { text: "\u5050", weight: 25 },
  { text: "\u5051", weight: 25 },
  { text: "\u5052", weight: 25 },
  { text: "\u5053", weight: 25 },
  { text: "\u5054", weight: 25 },
  { text: "\u5055", weight: 25 },
  { text: "\u5056", weight: 25 },
  { text: "\u5057", weight: 25 },
  { text: "\u5058", weight: 25 },
  { text: "\u5059", weight: 25 },
  { text: "\u505A", weight: 25 },
  { text: "\u505B", weight: 25 },
  { text: "\u505C", weight: 25 },
  { text: "\u505D", weight: 25 },
  { text: "\u505E", weight: 25 },
  { text: "\u505F", weight: 25 },
  { text: "\u5060", weight: 25 },
  { text: "\u5061", weight: 25 },
  { text: "\u5062", weight: 25 },
  { text: "\u5063", weight: 25 },
  { text: "\u5064", weight: 25 },
  { text: "\u5065", weight: 25 },
  { text: "\u5066", weight: 25 },
  { text: "\u5067", weight: 25 },
  { text: "\u5068", weight: 25 },
  { text: "\u5069", weight: 25 },
  { text: "\u506A", weight: 25 },
  { text: "\u506B", weight: 25 },
  { text: "\u506C", weight: 25 },
  { text: "\u506D", weight: 25 },
  { text: "\u506E", weight: 25 },
  { text: "\u506F", weight: 25 },
  { text: "\u5070", weight: 25 },
  { text: "\u5071", weight: 25 },
  { text: "\u5072", weight: 25 },
  { text: "\u5073", weight: 25 },
  { text: "\u5074", weight: 25 },
  { text: "\u5075", weight: 25 },
  { text: "\u5076", weight: 25 },
  { text: "\u5077", weight: 25 },
  { text: "\u5078", weight: 25 },
  { text: "\u5079", weight: 25 },
  { text: "\u507A", weight: 25 },
  { text: "\u507B", weight: 25 },
  { text: "\u507C", weight: 25 },
  { text: "\u507D", weight: 25 },
  { text: "\u507E", weight: 25 },
  { text: "\u507F", weight: 25 },
  { text: "\u5080", weight: 25 },
  { text: "\u5081", weight: 25 },
  { text: "\u5082", weight: 25 },
  { text: "\u5083", weight: 25 },
  { text: "\u5084", weight: 25 },
  { text: "\u5085", weight: 25 },
  { text: "\u5086", weight: 25 },
  { text: "\u5087", weight: 25 },
  { text: "\u5088", weight: 25 },
  { text: "\u5089", weight: 25 },
  { text: "\u508A", weight: 25 },
  { text: "\u508B", weight: 25 },
  { text: "\u508C", weight: 25 },
  { text: "\u508D", weight: 25 },
  { text: "\u508E", weight: 25 },
  { text: "\u508F", weight: 25 },
  { text: "\u5090", weight: 25 },
  { text: "\u5091", weight: 25 },
  { text: "\u5092", weight: 25 },
  { text: "\u5093", weight: 25 },
  { text: "\u5094", weight: 25 },
  { text: "\u5095", weight: 25 },
  { text: "\u5096", weight: 25 },
  { text: "\u5097", weight: 25 },
  { text: "\u5098", weight: 25 },
  { text: "\u5099", weight: 25 },
  { text: "\u509A", weight: 25 },
  { text: "\u509B", weight: 25 },
  { text: "\u509C", weight: 25 },
  { text: "\u509D", weight: 25 },
  { text: "\u509E", weight: 25 },
  { text: "\u509F", weight: 25 },
  { text: "\u50A0", weight: 25 },
  { text: "\u50A1", weight: 25 },
  { text: "\u50A2", weight: 25 },
  { text: "\u50A3", weight: 25 },
  { text: "\u50A4", weight: 25 },
  { text: "\u50A5", weight: 25 },
  { text: "\u50A6", weight: 25 },
  { text: "\u50A7", weight: 25 },
  { text: "\u50A8", weight: 25 },
  { text: "\u50A9", weight: 25 },
  { text: "\u50AA", weight: 25 },
  { text: "\u50AB", weight: 25 },
  { text: "\u50AC", weight: 25 },
  { text: "\u50AD", weight: 25 },
  { text: "\u50AE", weight: 25 },
  { text: "\u50AF", weight: 25 },
  { text: "\u50B0", weight: 25 },
  { text: "\u50B1", weight: 25 },
  { text: "\u50B2", weight: 25 },
  { text: "\u50B3", weight: 25 },
  { text: "\u50B4", weight: 25 },
  { text: "\u50B5", weight: 25 },
  { text: "\u50B6", weight: 25 },
  { text: "\u50B7", weight: 25 },
  { text: "\u50B8", weight: 25 },
  { text: "\u50B9", weight: 25 },
  { text: "\u50BA", weight: 25 },
  { text: "\u50BB", weight: 25 },
  { text: "\u50BC", weight: 25 },
  { text: "\u50BD", weight: 25 },
  { text: "\u50BE", weight: 25 },
  { text: "\u50BF", weight: 25 },
  { text: "\u50C0", weight: 25 },
  { text: "\u50C1", weight: 25 },
  { text: "\u50C2", weight: 25 },
  { text: "\u50C3", weight: 25 },
  { text: "\u50C4", weight: 25 },
  { text: "\u50C5", weight: 25 },
  { text: "\u50C6", weight: 25 },
  { text: "\u50C7", weight: 25 },
  { text: "\u50C8", weight: 25 },
  { text: "\u50C9", weight: 25 },
  { text: "\u50CA", weight: 25 },
  { text: "\u50CB", weight: 25 },
  { text: "\u50CC", weight: 25 },
  { text: "\u50CD", weight: 25 },
  { text: "\u50CE", weight: 25 },
  { text: "\u50CF", weight: 25 },
  { text: "\u50D0", weight: 25 },
  { text: "\u50D1", weight: 25 },
  { text: "\u50D2", weight: 25 },
  { text: "\u50D3", weight: 25 },
  { text: "\u50D4", weight: 25 },
  { text: "\u50D5", weight: 25 },
  { text: "\u50D6", weight: 25 },
  { text: "\u50D7", weight: 25 },
  { text: "\u50D8", weight: 25 },
  { text: "\u50D9", weight: 25 },
  { text: "\u50DA", weight: 25 },
  { text: "\u50DB", weight: 25 },
  { text: "\u50DC", weight: 25 },
  { text: "\u50DD", weight: 25 },
  { text: "\u50DE", weight: 25 },
  { text: "\u50DF", weight: 25 },
  { text: "\u50E0", weight: 25 },
  { text: "\u50E1", weight: 25 },
  { text: "\u50E2", weight: 25 },
  { text: "\u50E3", weight: 25 },
  { text: "\u50E4", weight: 25 },
  { text: "\u50E5", weight: 25 },
  { text: "\u50E6", weight: 25 },
  { text: "\u50E7", weight: 25 },
  { text: "\u50E8", weight: 25 },
  { text: "\u50E9", weight: 25 },
  { text: "\u50EA", weight: 25 },
  { text: "\u50EB", weight: 25 },
  { text: "\u50EC", weight: 25 },
  { text: "\u50ED", weight: 25 },
  { text: "\u50EE", weight: 25 },
  { text: "\u50EF", weight: 25 },
  { text: "\u50F0", weight: 25 },
  { text: "\u50F1", weight: 25 },
  { text: "\u50F2", weight: 25 },
  { text: "\u50F3", weight: 25 },
  { text: "\u50F4", weight: 25 },
  { text: "\u50F5", weight: 25 },
  { text: "\u50F6", weight: 25 },
  { text: "\u50F7", weight: 25 },
  { text: "\u50F8", weight: 25 },
  { text: "\u50F9", weight: 25 },
  { text: "\u50FA", weight: 25 },
  { text: "\u50FB", weight: 25 },
  { text: "\u50FC", weight: 25 },
  { text: "\u50FD", weight: 25 },
  { text: "\u50FE", weight: 25 },
  { text: "\u50FF", weight: 25 },
  { text: "\u5100", weight: 25 },
  { text: "\u5101", weight: 25 },
  { text: "\u5102", weight: 25 },
  { text: "\u5103", weight: 25 },
  { text: "\u5104", weight: 25 },
  { text: "\u5105", weight: 25 },
  { text: "\u5106", weight: 25 },
  { text: "\u5107", weight: 25 },
  { text: "\u5108", weight: 25 },
  { text: "\u5109", weight: 25 },
  { text: "\u510A", weight: 25 },
  { text: "\u510B", weight: 25 },
  { text: "\u510C", weight: 25 },
  { text: "\u510D", weight: 25 },
  { text: "\u510E", weight: 25 },
  { text: "\u510F", weight: 25 },
  { text: "\u5110", weight: 25 },
  { text: "\u5111", weight: 25 },
  { text: "\u5112", weight: 25 },
  { text: "\u5113", weight: 25 },
  { text: "\u5114", weight: 25 },
  { text: "\u5115", weight: 25 },
  { text: "\u5116", weight: 25 },
  { text: "\u5117", weight: 25 },
  { text: "\u5118", weight: 25 },
  { text: "\u5119", weight: 25 },
  { text: "\u511A", weight: 25 },
  { text: "\u511B", weight: 25 },
  { text: "\u511C", weight: 25 },
  { text: "\u511D", weight: 25 },
  { text: "\u511E", weight: 25 },
  { text: "\u511F", weight: 25 },
  { text: "\u5120", weight: 25 },
  { text: "\u5121", weight: 25 },
  { text: "\u5122", weight: 25 },
  { text: "\u5123", weight: 25 },
  { text: "\u5124", weight: 25 },
  { text: "\u5125", weight: 25 },
  { text: "\u5126", weight: 25 },
  { text: "\u5127", weight: 25 },
  { text: "\u5128", weight: 25 },
  { text: "\u5129", weight: 25 },
  { text: "\u512A", weight: 25 },
  { text: "\u512B", weight: 25 },
  { text: "\u512C", weight: 25 },
  { text: "\u512D", weight: 25 },
  { text: "\u512E", weight: 25 },
  { text: "\u512F", weight: 25 },
  { text: "\u5130", weight: 25 },
  { text: "\u5131", weight: 25 },
  { text: "\u5132", weight: 25 },
  { text: "\u5133", weight: 25 },
  { text: "\u5134", weight: 25 },
  { text: "\u5135", weight: 25 },
  { text: "\u5136", weight: 25 },
  { text: "\u5137", weight: 25 },
  { text: "\u5138", weight: 25 },
  { text: "\u5139", weight: 25 },
  { text: "\u513A", weight: 25 },
  { text: "\u513B", weight: 25 },
  { text: "\u513C", weight: 25 },
  { text: "\u513D", weight: 25 },
  { text: "\u513E", weight: 25 },
  { text: "\u513F", weight: 25 },
  { text: "\u5140", weight: 25 },
  { text: "\u5141", weight: 25 },
  { text: "\u5142", weight: 25 },
  { text: "\u5143", weight: 25 },
  { text: "\u5144", weight: 25 },
  { text: "\u5145", weight: 25 },
  { text: "\u5146", weight: 25 },
  { text: "\u5147", weight: 25 },
  { text: "\u5148", weight: 25 },
  { text: "\u5149", weight: 25 },
  { text: "\u514A", weight: 25 },
  { text: "\u514B", weight: 25 },
  { text: "\u514C", weight: 25 },
  { text: "\u514D", weight: 25 },
  { text: "\u514E", weight: 25 },
  { text: "\u514F", weight: 25 },
  { text: "\u5150", weight: 25 },
  { text: "\u5151", weight: 25 },
  { text: "\u5152", weight: 25 },
  { text: "\u5153", weight: 25 },
  { text: "\u5154", weight: 25 },
  { text: "\u5155", weight: 25 },
  { text: "\u5156", weight: 25 },
  { text: "\u5157", weight: 25 },
  { text: "\u5158", weight: 25 },
  { text: "\u5159", weight: 25 },
  { text: "\u515A", weight: 25 },
  { text: "\u515B", weight: 25 },
  { text: "\u515C", weight: 25 },
  { text: "\u515D", weight: 25 },
  { text: "\u515E", weight: 25 },
  { text: "\u515F", weight: 25 },
  { text: "\u5160", weight: 25 },
  { text: "\u5161", weight: 25 },
  { text: "\u5162", weight: 25 },
  { text: "\u5163", weight: 25 },
  { text: "\u5164", weight: 25 },
  { text: "\u5165", weight: 25 },
  { text: "\u5166", weight: 25 },
  { text: "\u5167", weight: 25 },
  { text: "\u5168", weight: 25 },
  { text: "\u5169", weight: 25 },
  { text: "\u516A", weight: 25 },
  { text: "\u516B", weight: 25 },
  { text: "\u516C", weight: 25 },
  { text: "\u516D", weight: 25 },
  { text: "\u516E", weight: 25 },
  { text: "\u516F", weight: 25 },
  { text: "\u5170", weight: 25 },
  { text: "\u5171", weight: 25 },











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









