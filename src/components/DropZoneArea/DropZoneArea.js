import React, { useContext } from 'react';
import Dropzone from 'react-dropzone'

import { dropZoneContext } from '../../Contexts/DropZoneContext';

import './dropZoneArea.scss';

function DropZone() {
  const { validateDropedFiles } = useContext(dropZoneContext);
  return (
    <Dropzone onDrop={ dropedFiles => validateDropedFiles(dropedFiles) }>
      { ({ getRootProps, getInputProps }) => (
        <section className="dropzone-section">
          <div className="dropzone-container" { ...getRootProps() }>
            <input { ...getInputProps() } />
            <div className="dropzone-text">
              Drag 'n' drop some files here,<br /> or click to select files
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  )  
}

export default DropZone;