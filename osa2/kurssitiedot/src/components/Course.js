import React from 'react'

const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  );
}

const Part = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  );
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => <Part key={index} part={part.name} exercises={part.exercises}/>)}
    </div>
  );
}

const Total = ({parts}) => {
  let totalExercises = parts.reduce( (prev, current) => {
    const total = prev.exercises || prev;
    return total + current.exercises;
  })
  return(
    <p>yhteensä {totalExercises} tehtävää</p>
  )
}



const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}


export default Course
