import { useState } from 'react'

const Knopka = ({ text, handleClick}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

const Statistics =({ good, neutral, bad}) => {
  
  const all = good + neutral + bad
  const average = all > 0 ? (good - bad) / all : 0
  const positive = all > 0 ? (good / all) * 100 : 0

  if (all === 0){
    return <div>No feedback given</div>
  }

  return (
    <table>
      <StatisticLine text = {"good"} value = {good}/>
      <StatisticLine text = {"neutral"} value = {neutral}/>
      <StatisticLine text = {"bad"} value = {bad}/>
      <StatisticLine text = {"all"} value = {all}/>
      <StatisticLine text = {"average"} value = {average}/>
      <StatisticLine text = {"positive"} value = {positive}/>
    </table>
  )
}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <Knopka text={"good"} handleClick={() => setGood(good + 1)}/>
      <Knopka text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Knopka text={"bad"} handleClick={() => setBad(bad + 1) }/>
      <h2>Statistics</h2>
      <Statistics good={ good } neutral = { neutral } bad = { bad }/>
    </div>
  )
}

export default App