import React, { useState } from 'react';
import './styles.css';

function App() {


  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [inputValue, setInputValue] = useState('');

  

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a valid item.');
      return;
    }

    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="App">
      <h1>Items List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 

      />
      <button onClick={handleAddItem}>Add Item</button>
    
    </div>
  );
}

export default App;