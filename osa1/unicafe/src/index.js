import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

const Statistic = props => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.children}</td>
      </tr>
  );
}

const Statistics = props => {
  const { good, neutral, bad } = props
  const total = () => good + neutral + bad
  const average = () => (good - bad) / total()
  const positives = () => good / total() * 100

  return (
    <div>
      <h2>Statistiikka</h2>
      {total() === 0
        ? <p>Ei yhtään palautetta annettu</p>
        : <table>
            <tbody>
              <Statistic text={"hyvä"} value={good}/>
              <Statistic text={"neutraali"} value={neutral}/>
              <Statistic text={"huono"} value={bad}/>
              <Statistic text={"yhteensä"} value={total()}/>
              <Statistic text={"keskiarvo"} value={average()}/>
              <Statistic text={"positiivisa"} value={positives()} children={"%"}/>
            </tbody>
          </table>}
    </div>
  );
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text={"hyvä"}/>
        <Button handleClick={() => setNeutral(neutral + 1)} text={"neutraali"}/>
        <Button handleClick={() => setBad(bad + 1)} text={"huono"}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
