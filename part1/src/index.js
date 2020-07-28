// import React from 'react'
// import ReactDOM from 'react-dom'

// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercises}</p>
//   )
// }

// const Total = (props) => {

//   const exercises1 = props.parts[0].exercises
//   const exercises2 = props.parts[1].exercises
//   const exercises3 = props.parts[2].exercises

//   const total = exercises1 + exercises2 + exercises3

//   return (
//     <p>Number of exercises {total}</p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course.name} />

//       <Content parts={course.parts} />

//       <Total parts={course.parts} />
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
      <button onClick={handleClick}>
        {text}
      </button>
  )


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)


  return (
    <div>
      <Display counter={counter} />
      <br />

      <Button
        handleClick={increaseByOne}
        text='Plus'
      />

      <br />
      <Button
        handleClick={decreaseByOne}
        text='Minus'
      />
      <br />

      <Button
        handleClick={setToZero}
        text='Zero'
      />
      <br />

    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)