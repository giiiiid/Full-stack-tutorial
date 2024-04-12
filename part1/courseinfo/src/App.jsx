import {useState} from 'react'


const Feedback = (props) => {
  return (
    <>
    <h1>give feedback</h1>
    <p>
      <button onClick={props.handleGood}>good</button>
      <button onClick={props.handleNeutral}>neutral</button>
      <button onClick={props.handleBad}>bad</button>
    </p>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}


const Statistics = ({good, bad, neutral, average, total}) => {
  if (good || bad || neutral) {
    console.log((good/total)*100)
    return (
      <>
        {/* <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average / 3}</p>
        <p>positive {(good / total) * 100}%</p> */}

        <StatisticLine text="good" value={good}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="average" value={average/3}/>
        <StatisticLine text="positive" value={(good/total)*100}/>
      </>
    );
  } else {
    return <div>No feedback given</div>
  }
};

const Anecdotes = ({info, nextAnecdote, prevAnecdote, vote}) => {
  if (info) {
    return (
      <div>
        {info}
        <p>
        <button onClick={vote}>vote</button>
          <button onClick={nextAnecdote}>next anecdote</button>
        </p>
      </div>
    )
  } else {
    return (
    <div>
      Thank you for reading the anecdotes😉
      <p>
        <button onClick={prevAnecdote}>prev anecdote</button>
      </p>
    </div>
    )
  }
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    // console.log(good)
    setTotal(total + 1)
    setAverage(average + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setAverage((average + 1))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage((average + 1))
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const points = [1,4,6,3]
  const copy =[...points]
  copy[2] += 1

  const handleVote = () => {
    const copy =[...points]
    copy[0]++
    setVote(copy)
    console.log(vote)
  }


  const handleAnecdotes = () => {
    if (selected != anecdotes.length) {
      setSelected(selected+1)
    }
    else {
      setSelected(selected-1)
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <h2>Statistics</h2>
      {/* <br />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average / 3}</p>
      <p>positive {(good / total) * 100}%</p> */}
      
      {/* code refactored */}
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average}/>
      <br />

      <h3>The World of Anecdotes</h3>
      <div>
        <Anecdotes info={anecdotes[selected]} nextAnecdote={handleAnecdotes} prevAnecdote={handleAnecdotes} vote={handleVote}/>
        {/* <p>
        <button onClick={handleAnecdotes}>next anecdote</button>
        </p> */}
      </div>
    </div>
  )
}

export default App