/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
// import './styles.css';
//  exclude: /node_modules/,;

const onError = e => {
  console.log(e, 'error in file-viewer');
};

export default function FeaturePage() {
  const onError = e => {
    console.log(e, 'error in file-viewer');
  };
  return (
    <div>
      {/* <div>
        <details>
          <summary>.docx</summary>
          <div style={{ height: '500px' }}>
            {' '}
            <FileViewer fileType="docx" filePath={dktt} onError={onError} />
          </div>
        </details>
        <details>
          <summary>.mp4</summary>
          <FileViewer
            fileType="mp4"
            filePath="./mov_bbb.mp4"
            onError={onError}
          />
        </details>
        <details>
          <summary>.pdf</summary>
          <FileViewer fileType="pdf" filePath={DemoPDF} onError={onError} />
        </details>
        <details open>
          <summary>.pdf</summary>
          <FileViewer fileType="jpg" filePath={imgage1} onError={onError} />
        </details>
      </div> */}
    </div>
  );
}
