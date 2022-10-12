import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ThemeConsumer } from 'styled-components';

export function tableToExcel(id, n, code, fileName = 'download', title) {
  title = fileName;
  fileName = title;
  const uri = 'data:application/vnd.ms-excel;base64,';
  const template = `<html 
      xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:x="urn:schemas-microsoft-com:office:excel" 
      xmlns="http://www.w3.org/TR/REC-html40">
      <head>
      <!--[if gte mso 9]>
      <xml>
      <x:ExcelWorkbook>
      <x:ExcelWorksheets>
      <x:ExcelWorksheet>
      <x:Name>{worksheet}</x:Name>
      <x:WorksheetOptions>
      <x:DisplayGridlines/>
      </x:WorksheetOptions>
      </x:ExcelWorksheet>
      </x:ExcelWorksheets>
      </x:ExcelWorkbook></xml>
      <![endif]-->
      <meta http-equiv="content-type" content="text/plain; charset=UTF-8"/>
      </head><body>
          ${
            fileName.trim() && fileName !== 'download'
              ? `<table>
            <body>
              <tr rowspan='1'>
                <td></td>
                <td></td>
                <td colspan='5'><h3>${fileName}<h3></td>
              </tr>
            </body>
          </table><br/>`
              : ''
          }
          {table}
      </body></html>`;

  function base64(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
  }

  function format(s, c) {
    return s.replace(/{(\w+)}/g, (m, p) => c[p]);
  }

  function getHtml(table) {
    if (!table.nodeType) table = document.getElementById(table);
    table = table.innerHTML;
    table = table.split('<tfoot>');
    // table[0] = table[0].replaceAll('<td>', '<td>="')
    // table[0] = table[0].replaceAll('</td>', '"</td>')
    table = table.join('<tfoot>');
    return table;
  }

  function print(table, name) {
    table = getHtml(table);
    const ctx = { worksheet: name || 'Worksheet', table };
    // window.location.href = uri + base64(format(template, ctx));
    const a = document.createElement('a');
    a.href = uri + base64(format(template, ctx));
    a.download = `${fileName}.xls`;
    a.click();
  }
  print(id, n);
}
export function tableToPDF(id, fileName = 'PDF', title) {
  console.log('tabletopdf');
  const sTable = document.getElementById(id).innerHTML;

  const style = `<style>@media print {
        @page{
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 15px;
        margin-bottom: 0px;
        }
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
  
        td,
        th {
          word-wrap: break-word;
          max-width: 100px;
          min-width: 40px;
          border: 1px solid #dddddd;
          min-height: 100px;
          padding: 8px;
      }
      
  
     
    </style>`;

  // CREATE A WINDOW OBJECT.
  // var win = window.open('', '', 'height=700,width=700');
  // var win = window.open(`${pageNumber}`);
  const fileTitle = title ? title : `${titleText}`;
  const title1 = 'Danh sách khách hàng';
  let html = '<!DOCTYPE html><html><head>';
  html += `<title>${fileTitle}</title>`;
  html += style;
  html += '</head>';
  html += '<body>';
  html += `<h2 style="text-align: center">${
    fileTitle === 'Khách hàng' ? title1 : fileTitle
  }</h2>`;
  html += sTable;
  html += '</body></html>';

  const removeContext = 'tfoot';
  if (html.includes(removeContext)) {
    const start = html.indexOf(`<${removeContext}>`);
    const end = html.indexOf(`</${removeContext}>`);
    html = `${html.substr(0, start)}${html.substr(
      end + removeContext.length + 3,
    )}`;
  }
  console.log('html', html);

  return html;
}
export function printPDF(content, id, fileName = 'download') {
  let win = window.open();
  win.document.write(content);
  win.document.close();
  win.print();
}
export const exportPDF = (content, id, fileName = 'dowload') => {
  // const win = window.open();
  // win.document.write(content);
  let input = document.getElementById(id);
  input = html2canvas(input, {
    scrollY: -window.scrollY,
    scale: 1,
  }).then(canvas => {
    const imageData = canvas.toDataURL('image/png');
    let pdf = new jsPDF('', 'mm', 'a4');
    var pageHeight = pdf.internal.pageSize.height;
    var imgWidth = 210;
    console.log('heigh', canvas.height, canvas.width);
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;
    var position = 0;
    pdf.addImage(imageData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while (heightLeft >= 0) {
      console.log('inhere');
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imageData, 'PNG', 0, position, imgHeight);
      heightLeft -= pageHeight;
    }
    //pdf.addImage(imageData, "JPEG", 0 , 0)
    //pdf.save( `${fileName}.pdf`)
    pdf.save(`${fileName}.pdf`);
  });
  // var scaleBy = 5;
  // var w = 1000;
  // var h = 1000;
  // var div = document.querySelector(id);
  // var canvas = document.createElement('canvas');
  // canvas.width = w * scaleBy;
  // canvas.height = h * scaleBy;
  // canvas.style.width = w + 'px';
  // canvas.style.height = h + 'px';
  // var context = canvas.getContext('2d');
  // context.scale(scaleBy, scaleBy);

  // html2canvas(div, {
  //   canvas: canvas,
  //   onrendered: function(canvas) {
  //     theCanvas = canvas;
  //     document.body.appendChild(canvas);

  //     Canvas2Image.saveAsPNG(canvas);
  //     $(body).append(canvas);
  //   },
  // });
};
export const exportPDFt = async (content, id, fileName = 'dowload', cb) => {
  // const win = window.open();
  // win.document.write(content);\{
  let input = document.getElementById(id);

  html2canvas(input, {
    useCORS: true,
    allowTaint: true,
    scrollY: 0,
    scale: 2, // độ sắc nét của trang pdf
  }).then(canvas => {
    const image = { type: 'jpeg', quality: 0.98 };
    const margin = [0.5, 0.5];

    var imgWidth = 11;
    var pageHeight = 8.5;

    var innerPageWidth = imgWidth - margin[0] * 2;
    var innerPageHeight = pageHeight - margin[1] * 2;

    // Calculate the number of pages.
    var pxFullHeight = canvas.height;
    var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
    var nPages = Math.ceil(pxFullHeight / pxPageHeight);

    // Define pageHeight separately so it can be trimmed on the final page.
    var pageHeight = innerPageHeight;

    // Create a one-page canvas to split up the full image.
    var pageCanvas = document.createElement('canvas');
    var pageCtx = pageCanvas.getContext('2d');
    pageCanvas.width = canvas.width;
    pageCanvas.height = pxPageHeight;

    // Initialize the PDF.
    var pdf = new jsPDF('l', 'in', [8.5, 11]);

    for (var page = 0; page < nPages; page++) {
      // Trim the final page to reduce file size.
      if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
        pageCanvas.height = pxFullHeight % pxPageHeight;
        pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
      }

      // Display the page.
      var w = pageCanvas.width;
      var h = pageCanvas.height;
      pageCtx.fillStyle = 'white';
      pageCtx.fillRect(0, 0, w, h);
      pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

      // Add the page to the PDF.
      if (page > 0) pdf.addPage();
      // debugger;
      var imgData = pageCanvas.toDataURL('image/' + image.type, image.quality);
      // for (var i = 0; i <= nPages; i++) {
      // pdf.setPage(page);

      //Đánh số vào page và set màu sắc
      pdf.setFontSize(10);
      pdf.setTextColor(150);
      pdf.text('Page' + String(page + 1) + 'of' + String(nPages), 10, 8.3);
      // }
      pdf.addImage(
        imgData,
        image.type,
        margin[1],
        margin[0],
        innerPageWidth,
        pageHeight,
      );
      // var string = pdf.output('datauristring');
      // console.log('stringstring', string);
      // var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
      // var x = window.open();
      // // x.document.open();
      // x.document.write(embed);
      // x.document.close();
    }
    window.open(
      pdf.output('bloburl', {
        filename: 'new-file.pdf',
      }),
      '_blank',
    );
    cb && cb();

    // pdf.save(`${fileName}.pdf`);
  });
  // var scaleBy = 5;
  // var w = 1000;
  // var h = 1000;
  // var div = document.querySelector(id);
  // var canvas = document.createElement('canvas');
  // canvas.width = w * scaleBy;
  // canvas.height = h * scaleBy;
  // canvas.style.width = w + 'px';
  // canvas.style.height = h + 'px';
  // var context = canvas.getContext('2d');
  // context.scale(scaleBy, scaleBy);

  // html2canvas(div, {
  //   canvas: canvas,
  //   onrendered: function(canvas) {
  //     theCanvas = canvas;
  //     document.body.appendChild(canvas);

  //     Canvas2Image.saveAsPNG(canvas);
  //     $(body).append(canvas);
  //   },
  // });
};

export function testPDFCanvas() {
  html2canvas(input, { useCORS: true, allowTaint: true, scrollY: 0 }).then(
    canvas => {
      const image = { type: 'jpeg', quality: 0.98 };
      const margin = [0.5, 0.5];
      const filename = 'myfile.pdf';

      var imgWidth = 8.5;
      var pageHeight = 11;

      var innerPageWidth = imgWidth - margin[0] * 2;
      var innerPageHeight = pageHeight - margin[1] * 2;

      // Calculate the number of pages.
      var pxFullHeight = canvas.height;
      var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
      var nPages = Math.ceil(pxFullHeight / pxPageHeight);

      // Define pageHeight separately so it can be trimmed on the final page.
      var pageHeight = innerPageHeight;

      // Create a one-page canvas to split up the full image.
      var pageCanvas = document.createElement('canvas');
      var pageCtx = pageCanvas.getContext('2d');
      pageCanvas.width = canvas.width;
      pageCanvas.height = pxPageHeight;

      // Initialize the PDF.
      var pdf = new jsPDF('p', 'in', [8.5, 11]);

      for (var page = 0; page < nPages; page++) {
        // Trim the final page to reduce file size.
        if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
          pageCanvas.height = pxFullHeight % pxPageHeight;
          pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
        }

        // Display the page.
        var w = pageCanvas.width;
        var h = pageCanvas.height;
        pageCtx.fillStyle = 'white';
        pageCtx.fillRect(0, 0, w, h);
        pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

        // Add the page to the PDF.
        if (page > 0) pdf.addPage();
        debugger;
        var imgData = pageCanvas.toDataURL(
          'image/' + image.type,
          image.quality,
        );
        pdf.addImage(
          imgData,
          image.type,
          margin[1],
          margin[0],
          innerPageWidth,
          pageHeight,
        );
      }

      pdf.save();
    },
  );
}
