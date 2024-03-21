import React from 'react';


function App() {
  const [inputData, setInputData] = React.useState('');
  const [dataList, setDataList] = React.useState([]);

  function handleChange(event) {
    setInputData(event.target.value);
  }

  function addInput(event) {
    event.preventDefault();
    setDataList((prevDataList) => [...prevDataList, inputData]);
    setInputData('');
  }

  return (
    <div className="container">
      <form onSubmit={addInput}>
        <input
          type="text"
          placeholder="Type here"
          value={inputData}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>

      <h1 className="header">{inputData}</h1>

      <ol className="list">

        {dataList.map((data, index) => (
          <li key={index} className="list-item">
            {data}
          </li>
          
        ))}
      </ol>
    </div>
  );
}

export default App;
