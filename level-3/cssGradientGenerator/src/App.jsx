import { useState, useEffect } from 'react';
import './App.css';

function App() {

  //state variables 
  const [color1, setColor1] = useState('#FF69B1'); // sets color automatically to pink 
  const [color2, setColor2] = useState('#80ffa5'); // sets color automatically to green 
  const [angle, setAngle] = useState(0); // DEFAULT ANGLE FOR GRADIENT
  const [cssCode, setCssCode] = useState('');// State variable for the code that is responsible for the actual gradient, this changes with any of the other state variable change 
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColor1 = (e) => {
    setColor1(e.target.value);
  };

  const handleColor2 = (e) => {
    setColor2(e.target.value);
  };

  const handleAngleChange = (e) => {
    setAngle(e.target.value);
  };

  useEffect(() => {
    const generateCss = `
    background: linear-gradient(${angle}deg, ${color1},${color2});
    -moz-background: moz-linear-gradient(${angle}deg, ${color1},${color2});
    -webkit-background: -webkit-linear-gradient(${angle}deg, ${color1},${color2});`;

    setCssCode(generateCss);//updates the css code state with new generated CSS

    setBackgroundColor(`linear-gradient(${angle}deg, ${color1}, ${color2})`);

  }, [color1, color2, angle]);

  const previewBox = {
    background: `linear-gradient(${angle}deg, ${color1},${color2})`,
    width: '400px',
    height: '200px',
    border: '5px solid black',
    margin: '30px'
  };

  return (
    <div className="main" style={{ background: backgroundColor }}>
      <h1>Css Gradient Generator</h1>

      <div className="container">
        <div className="form">
          <label htmlFor='color1'> Color 1 : </label>
          <input
            type="color"
            className="formInput"
            value={color1}
            onChange={handleColor1}
          />
          <label htmlFor='color2'> Color 2 : </label>
          <input
            type="color"
            className="formInput"
            value={color2}
            onChange={handleColor2}
          />
          <label htmlFor='angle'>Gradient Angle: </label>
          <input
            type="number"
            className="formInput"
            value={angle}
            onChange={handleAngleChange}
          />
          <div className="preview" style={previewBox}></div>
          <textarea className="cssPreview" value={cssCode} readOnly />
        </div>
      </div>
    </div>
  );
}

export default App;
