import React from 'react';
import './globalConfig.scss';

import DropZoneArea from './components/DropZoneArea';
import DropZoneProvider from './Contexts/DropZoneContext';

function App() {
  return (
    <DropZoneProvider>
      <DropZoneArea />  
    </DropZoneProvider>
  );
}

export default App;
