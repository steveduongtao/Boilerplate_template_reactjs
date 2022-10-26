import React from 'react';
import exportFromJSON from 'export-from-json';

function DowloadFiles() {
  const dataFile = [
    { Name: 'Dương Thế Tạo' },
    { PhoneNumber: '0366888366' },
    { Age: '28' },
    { Address: 'Bắc Giang' },
  ];
  function onClick(typeFile) {
    console.log('clicked');

    const data = [
      {
        case_worked: 'abc',
        note: 'Test',
        id: '01234-ad',
      },
      {
        case_worked: 'def',
        note: 'test 1',
        id: '1234',
      },
      {
        case_worked: 'def',
        note: 'Test 2',
        id: '3456',
      },
    ];
    const fileName = 'download';
    const exportType = typeFile;

    exportFromJSON({ data, fileName, exportType });
  }
  return (
    <div>
      <p>List files you maybe to download (click to me!!!)</p>

      <div onClick={() => onClick('css')}>download css file.css</div>
      <div onClick={() => onClick('html')}>download html file.html</div>
      <div onClick={() => onClick('json')}>download JSON file.json</div>
      <div onClick={() => onClick('doc')}>download Doc file.docx</div>
      <div onClick={() => onClick('csv')}>download CSV file.csv</div>
      <div onClick={() => onClick('xls')}>download XLS file.xls(Excel)</div>
      <div onClick={() => onClick('xml')}>download XML file.xml</div>
      <div onClick={() => onClick('png')}>download XML file.png</div>

      <button onClick={() => onClick()}>Click to download</button>
    </div>
  );
}

export default DowloadFiles;
