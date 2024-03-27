import { useState } from "react"


const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}


const Part = (props) => {
  return(
    <>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </>
  )
}


const Content = () => {

  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return(
    <>
    <Part part1={part1} exercises1={exercises1}/>
    <Part part1={part2} exercises1={exercises2}/>
    <Part part1={part3} exercises1={exercises3}/>
    </>
  )
}


const Total = (props) => {
  return(
    <>
    <p>Number of exercises {props.total}</p>
    </>
  )
}


const Hello = ({name, age}) => {
  // const name = props.name
  // const age = props.age
  // const {name, age} = props

  const bornYear = () => new Date().getFullYear() - age

  return(
    <>
      <p>Hello {name}, you are {age} years old </p>
      <p>You were probably born in {bornYear()} </p>
    </>
  )
}

const Counting = () => {
  const [counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  
  // console.log("rendering", counter) 
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <p>Time is running {counter} </p>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={increaseByOne}>increase</button>
      <button onClick={setToZero}>zero</button>
    </>
  )
}


const App = (props) => {

  // const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  // const {counter} = props

  return(
    <div>
      <Header course={course}/>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3}/>
      <Hello name="Gideon" age="21" year="2002" />
      <Counting />
      
    </div>
  )
}

export default App