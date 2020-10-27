import {React,useState} from "react";
import "react-bootstrap";
import {Link} from "react-router-dom"
import PocketCard from "./PocketCard"
import ExpenseDetail from "./ExpensesDetailCard"
import "./WeeklyExpenses.css"


export default function WeeklyE(){
  const [inputOne,setInputOne]=useState()
  const [inputTwo,setInputTwo]=useState("")
  const [inputThree,setInputThree]=useState()

  const handleInputOne=(e)=>{
    setInputOne(e.target.value)
  }

 const handleInputTwo=(e)=>{
  setInputTwo(e.target.value)
 }

 const handleInputThree=(e)=>{
  setInputThree(e.target.value)
 }
  return(
    <div>
      <Link to="/">Home</Link>
      <h1>Calculate Expenses</h1>
     <form onSubmit={e=> e.preventDefault()}>
       <input 
       className="input1" 
       type="number" 
       placeholder="Money in your pocket"
        value={inputOne}
       onChange={handleInputOne}
       />
       <input
        className="input2"
         type="text"
         placeholder="Expense"
          value={inputTwo}
         onChange={handleInputTwo}
         />
       <input 
       className="input3"
        type="number"
        placeholder="Expense Price"
        value={inputThree}
        onChange={handleInputThree }
        />
        
       <button 
       type="submit"
       className="button1" 
      function onClick={e=>inputOne - inputThree}
        >
       Calculate
      </button>
     </form>
     <PocketCard onClick={onclick}/>
     <ExpenseDetail/>

    </div>
  )
}