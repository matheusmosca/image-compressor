import React, { createContext, useState } from 'react';

export const dropZoneContext = createContext();

function DropZoneProvider({ children }) {
  const [dropedFiles, setDropedFiles] = useState([])

  function validateDropedFiles(arrayOfFiles) {
    if (arrayOfFiles) setDropedFiles(arrayOfFiles);
  }
  return (
    <dropZoneContext.Provider value={{ dropedFiles, validateDropedFiles }}>
      { children }
    </dropZoneContext.Provider>
  )
}

export default DropZoneProvider;