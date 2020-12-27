import React from 'react';
import './App.css';
import {hiraArray} from './hiras/hindex'

function randomLink(){
  
    console.log(hiraArray);
    return Math.floor(Math.random() * (5 - 0 + 1)) + 0;
 
    

}

function App() {
  randomLink();
  return (
    <div className="App">
      <header className="App-header">
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Japanese_Hiragana_kyokashotai_A.svg/274px-Japanese_Hiragana_kyokashotai_A.svg.png" alt="hiragana"/>
      </header>
    </div>
  );
}

export default App;
