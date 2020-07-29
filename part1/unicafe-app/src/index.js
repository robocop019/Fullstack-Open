import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const Statistics = ({ good, neutral, bad, all, avg, positive }) => {
  if (all === 0) {
    return (
      <div>
        <p>No feedback given yet...</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Statistic text='Good' stats={good} />
          </tr>
          <tr>
            <Statistic text='Neutral' stats={neutral} />
          </tr>
          <tr>
            <Statistic text='Bad' stats={bad} />
          </tr>
          <tr>
            <Statistic text='All' stats={all} />
          </tr>
          <tr>
            <Statistic text='Average' stats={ avg } />
          </tr>
          <tr>
            <Statistic text='Positive' stats={positive} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistic = ({text, stats}) => {
  return (
    <>
      <td>{text}</td>
      <td>{stats}</td>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+ neutral + bad
  const avg = ((good * 1) + (bad * -1)) / (good + neutral + bad)
  const positive = (good / all) * 100 + ' %'

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' handleClick={() => setGood(good + 1)} />
      <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='Bad' handleClick={() => setBad(bad + 1)} />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)