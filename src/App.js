
import './App.css';

import useTyping from "./useTyping"

function App() {
  
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
    } = useTyping(5)

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={() => startGame()}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
