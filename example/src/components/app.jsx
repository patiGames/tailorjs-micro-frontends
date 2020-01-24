import React from 'react';

const App = () => {
  const [name, setName] = React.useState('');
  const [msg, setMsg] = React.useState('');

  const handleButtonClick = () => {
    const nameLen = name.length;
    if (nameLen > 0) {
      setMsg(`You name has ${nameLen} characters including space`);
    }
  };

  const handleTextChange = e => {
    setName(e.target.value);
  };

  const handleReset = () => {
    setMsg('');
    setName('');
  };

  return (
    // do something here where there is a button that will replace the text
    <div>
      <label>Your name </label>
      <input
        type="text"
        id="txtName"
        name="txtName"
        value={name}
        onChange={handleTextChange}
      />
      <button id="btnSubmit" type="button" onClick={handleButtonClick}>
        Calculate Name Length
      </button>
      <button id="btnReset" type="button" onClick={handleReset}>
        Reset All
      </button>
      <hr />
      {msg}
    </div>
  );
};
export default App;
