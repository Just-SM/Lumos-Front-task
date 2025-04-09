# Lumos-Front-task

## Overview

This is a basic React application that lets users maintain a list of items. Users can add new items to the list using an input field. If the input is empty, the app will prompt the user to enter a valid item. Users can also see the current list of items displayed on the screen.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [ToDOs](#todos)
- [Code Explanation](#code-explanation)
  - [App Component](#app-component)

## Setup Instructions

1. **Clone the Repository**: Download or clone this repository to your local machine.
   ```
   git clone https://github.com/Just-SM/Lumos-Front-task
   ```

2. **Install Dependencies**: Navigate to the project folder and run the following command to install necessary libraries.
   ```
   cd my-simple-app
   npm install
   ```

3. **Run the Application**: Start the app by running:
   ```
   npm start
   ```
   Open your web browser and go to `http://localhost:3000` to view the application in action.

## ToDOs

1. **Item Deletion**: Implement a feature to delete last item from the list.
2. **Duplication Prevention**: The app prevents users from adding duplicate items, maintaining a clean list.
3. **Adding when pressing Enter**: Users can now add items by pressing the "Enter" key, improving usability.


## Code Explanation

### App Component

The main part of our application is in the `App.js` file. Let's break it down:

```javascript
import React, { useState } from 'react';
import './styles.css';
```
- Here, we are importing React and the `useState` hook, which allows us to manage state (data that can change) in our app.
- We also import styles from `styles.css` for visual formatting.

```javascript
function App() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [inputValue, setInputValue] = useState('');
```
- We're defining a functional component called `App`.
- `items` is a state variable that holds our list (starting with three fruits).
- `inputValue` is another state variable that keeps track of what the user types in the input field.

```javascript
const handleAddItem = () => {
  // Function to add items to the list
};
```
- This function is executed when the user wants to add a new item. It checks if the input is empty and adds the item to the list if it's valid.

```javascript
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
```
- This part returns the HTML structure:
  - An `h1` tag for the title.
  - A list (`ul`) that dynamically displays each item from the `items` array.
  - An input field that captures user input. The `onChange` event updates `inputValue` as the user types.
  - A button that, when clicked, invokes `handleAddItem`.

---