import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const getKeyWithMaxVotes = () => {
    let maxVotes = 0
    let maxKey = 0

    vote.forEach((value, index) => {
      if (value > maxVotes) {
        maxVotes = value
        maxKey = index
      }
    })
    return maxKey
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <br />
      <button onClick={() => setVote(vote.map((value, index) => index === selected ? value + 1 : value))}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * (8 - 0) + 0))}>next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getKeyWithMaxVotes()]}</p>
    </div>
  )
}

export default App