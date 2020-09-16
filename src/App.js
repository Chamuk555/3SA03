/*6135512064 Chayaporn Sareesuk*/
import React from 'react';
import './App.css';
import WordCard from './WordCard';
function App() {
  const word = "Hello";
  return (
    <div className="App">
    <header className="App-header">
      <div>
        {
          <WordCard value="hello"/>
        }
      <h1>
        Chayaporn  Sareesuk 6135512064
      </h1>
      </div>
    </header>
    </div>
  );
}
export default App;