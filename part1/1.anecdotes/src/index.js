import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0])

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  const updateVote = ({vote, selected}) => {
      const copy =[...vote]
      copy[selected] += 1
      setVote(copy)
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <p>
      has vote {vote[selected]}
      </p>
      <p>
        <Button onClick={() => updateVote({vote, selected})} text='vote'/>
        <Button onClick={() => setSelected(Math.floor(Math.random() * 6))} text='another anecdote'/>
      </p>
        <h1>anecdote with most votes</h1>
        <p>{props.anecdotes[vote.indexOf(Math.max(...vote))]}</p>
        <p>has vote {Math.max(...vote)}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writisng the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)