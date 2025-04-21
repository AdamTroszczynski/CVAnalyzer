import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';



const readPDF = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async function (e) {
      const pdfData = new Uint8Array(e.target!.result as ArrayBuffer);

      try {
        const pdf = await pdfjsLib.getDocument(pdfData).promise;
        const numPages = pdf.numPages;
        let fullText = '';

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const pageText = textContent.items.map((item: any) => item.str).join(' ');
          fullText += pageText + '\n';
        }

        resolve(fullText);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}

const readDOCX = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const arrayBuffer = event.target?.result;
      if (!(arrayBuffer instanceof ArrayBuffer)) {
        return reject(new Error("Wrong file type"));
      }

      mammoth.convertToHtml({ arrayBuffer })
        .then((result) => {
          resolve(result.value);
        })
        .catch(reject);
    };

    reader.onerror = () => reject(reader.error);

    reader.readAsArrayBuffer(file);
  });
}


export { readPDF, readDOCX };
