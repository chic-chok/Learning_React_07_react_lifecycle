import React, {useState} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import Demo from './components/UI/Button/Demo/Demo';

function App() {
const [showParagraph, setShowParagraph] = useState(false);
console.log('App Running!');
const toggleParagraphHandler= () => {
  setShowParagraph(prevShowParagraph => !prevShowParagraph);
}

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show = {false}/>
      <Button onClick={toggleParagraphHandler}> Toggle </Button>
    </div>
  );
}

export default App;
