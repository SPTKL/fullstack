import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
//   save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = (props) => {
      if (props.all === 0) {
          return (
              <div>
                  <p>No Feedback Given</p>
              </div>
          )
      } else { 
          return (
            <div>
                <h1>statistics</h1>
                <p>good {props.good}</p>
                <p>neutral {props.neutral}</p>
                <p>bad {props.bad}</p>
                <p>all {props.all}</p>
                <p>average {(props.good-props.bad)/props.all}</p>
                <p>positive {props.good/props.all}%</p>
            </div>
            )
        }
  }
  let all = good + bad + neutral
  return (
    <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>
            good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
            neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
            bad
        </button>
        <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)