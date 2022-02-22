import React, { useEffect, useState} from 'react';
import './App.css';
import Button from './components/Button';
import PianoKeyboard from './components/PianoKeyboard';



const App: React.FC = () => {

  return (
    <div className="App">
      
      <PianoKeyboard/>
         
    </div>
  );
}

export default App;
