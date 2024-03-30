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

const Button = ({onSmash, text}) => {
  return (
    <button onClick = {onSmash}>
      {text}
    </button>
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
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <>
      <p>Time is running {counter} </p>
      {/* <button onClick={() => setCounter(counter + 1)}>
        plus
      </button> */}
      {/* <button onClick={increaseByOne}>plus</button> */}
      <button onClick={decreaseByOne}>minus</button>
      <button onClick={setToZero}>zero</button>

      <Button onSmash={increaseByOne} text="passing it as a prop"/>
    </>
  )
}

const History = (props) => {
  console.log("props value is ", props)
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press History: {props.allClicks.join(" ")}
    </div>
  )
}


const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setClicks({...clicks, left: clicks.left + 1})
    updatedLeft = clicks.left + 1
    setTotal(updatedLeft + clicks.right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setClicks({...clicks, right: clicks.right + 1})
    updatedRight = clicks.right + 1
    setTotal(clicks.left + updatedRight)
  }

  const hello = () => {
    const handler = () => console.log("Hello world")
    return handler
  }


  return(
    <div>
      <Header course={course}/>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3}/>
      <Hello name="Gideon" age="21" year="2002" />
      <Counting />

      <div>
        <p> The left click is {clicks.left}
        <button onClick={handleLeftClick}>⬅️</button>
        </p>

        <p> The right click is {clicks.right}
        <button onClick={handleRightClick}>➡️</button>
        </p>

        <p>{allClicks.join(" ")}</p>
        <p>The number of clicks are {total} </p>

        <History allClicks={allClicks}/>
        <>
        <button onClick={hello()}>❓</button>
        </>
      </div>
    </div>
    
  )
}

export default App