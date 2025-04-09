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
    
    // Check for duplicate items
    if (items.includes(inputValue)) {
      alert('This item already exists in the list.');
      return;
    }

    setItems([...items, inputValue]);
    setInputValue('');
  };


  // Function to handle pressing "Enter" to add items
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem(); // Call add item function when "Enter" is pressed
    }
  };

  const handleRemoveItem = () => {
    setItems(items.slice(0,-1));
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

        // add event listener
        onKeyDown ={handleKeyPress}
      />
      <button onClick={handleAddItem}>Add Item</button>
    
      <button onClick={handleRemoveItem}>Remove Item</button>
    </div>
  );
}

export default App;