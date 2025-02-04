const url = "resume.pdf";

const scale = 0.8;
const canvas = document.getElementById("pdf-canvas");
const context = canvas.getContext("2d");

pdfjsLib
  .getDocument(url)
  .promise.then((pdf) => {
    pdf.getPage(1).then((page) => {
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  })
  .catch((error) => {
    console.error("خطا در بارگذاری PDF:", error);
  });