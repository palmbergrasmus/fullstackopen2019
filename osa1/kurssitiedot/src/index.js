import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => {
  return (
      <h1>{props.course}</h1>
  );
}

const Part = props => {
  const { part, exercises } = props
  return (
    <p>{part} {exercises}</p>
  );
}

const Content = props => {
  const { parts } = props
  return (
    <div>
      {parts.map((part, index) => <Part key={index} part={part.name} exercises={part.exercises}/>)}
    </div>
  );
}

const Total = props => {
  let totalExercises = 0;
  props.parts.forEach(part => totalExercises += part.exercises)
  return(
    <p>yhteensä {totalExercises} tehtävää</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
