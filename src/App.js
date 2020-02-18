import React, {useState} from 'react';
import './App.css';

function App() {
  const initialFeedback = {
    good : 0,
    bad : 0,
    neutral : 0
  }

  const [feedback, feedbackReceived] = useState(initialFeedback)

  //Good feedback received
  const increaseGoodFeedback = () => {
    const goodFeedback = {
      ...feedback,
      good : feedback.good + 1
    }
    feedbackReceived(goodFeedback)
  }

  //Bad feedback received
  const increaseBadFeedback = () => {
    const badFeedback = {
      ...feedback,
      bad : feedback.bad + 1
    }
    feedbackReceived(badFeedback)
  }

  //Neutral feedback received
  const increaseNeutralFeedback = () => {
    const neutralFeedback = {
      ...feedback,
      neutral : feedback.neutral + 1
    }
    feedbackReceived(neutralFeedback)
  }

  const resetFeedback = () => {
    feedbackReceived({...initialFeedback})
  }

  return (
    <section className="App">
      <h1>Give feedback</h1>
      <div>
        <button onClick={increaseGoodFeedback} className="App-button">Good</button>
        <button onClick={increaseNeutralFeedback} className="App-button">Neutral</button>
        <button onClick={increaseBadFeedback} className="App-button">Bad</button>
      </div>

      <div className="App-display">
        <p className="GoodFeedback">Good <br/> <span>{feedback.good}</span></p>
        <p className="NeutralFeedback">Neutral <br/> <span>{feedback.neutral}</span></p>
        <p className="BadFeedback">Bad <br/> <span>{feedback.bad}</span></p>
      </div>

    <div className="App-reset">
      <button onClick={resetFeedback}>Reset</button>
    </div>
    </section>
  );
}

export default App;
