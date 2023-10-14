import React, { useState } from 'react';
import './App.css';

function ColorPicker(props) {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColors(false);
    props.onColorSelect(color); // Notify the parent about the selected color
  };

  return (
    <div>
      <button onClick={() => setShowColors(!showColors)}>Pick a color</button>
      {showColors && (
        <div className="color-list">
          {props.colors.map(color => (
            <div 
              key={color} 
              className="color-box" 
              style={{backgroundColor: color}}
              onClick={() => handleColorSelect(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF', '#C0C0C0', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080'];
  const [backgroundColor, setBackgroundColor] = useState(''); // State to track the selected background color

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} onColorSelect={setBackgroundColor} />
    </div>
  );
}

export default App;
