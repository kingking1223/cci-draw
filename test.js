const drawArea = document.getElementById("draw-area");
      const ctx = drawArea.getContext("2d");
      let images = [];

      let isDrawing = false;
      let lastX = 0;
      let lastY = 0;

      drawArea.addEventListener("mousedown", startDrawing);
      drawArea.addEventListener("mousemove", draw);
      drawArea.addEventListener("mouseup", stopDrawing);
      drawArea.addEventListener("mouseleave", stopDrawing);

      function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      }

      function stopDrawing() {
        isDrawing = false;
        const dataURL = drawArea.toDataURL("image/png");
        images.push(dataURL);
      }

      function draw(e) {
        if (!isDrawing) return;
        const [x, y] = [e.offsetX, e.offsetY];
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
      }

      function changeText() {
        const texts = ["Hello", "World", "JSZip", "Canvas"];
        const randomIndex = Math.floor(Math.random() * texts.length);
        const text = texts[randomIndex];
        document.getElementById("text").textContent = text;
      }

      function download() {
        if (images.length === 0) return;

        const zip = new JSZip();
        const folder = zip.folder("drawings");

        images.forEach((image, i) => {
          const filename = `drawing-${i}.png`;
          const base64Data = image.replace(/^data:image\/(png|jpg);base64,/, "");
          folder.file(filename, base64Data, { base64: true });
        });

        zip.generateAsync({ type: "blob" }).then((content) => {
          const url = URL.createObjectURL(content);
          const link = document.createElement("a");
          link.href = url;
          link.download = "drawings.tar.gz";
          link.click();
          URL.revokeObjectURL(url);
          images = [];
        });
      }

      document.getElementById("change-text-btn").addEventListener("click", changeText);
      document.getElementById("download-btn").addEventListener("click", download);