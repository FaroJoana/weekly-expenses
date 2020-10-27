
//React frame
import { BrowserRouter as Router, Route } from "react-router-dom";
import { React,useState} from "react";
//components
import Landing from "./Components/LandingPage"
import WeeklyE from "./Components/WeeklyExpenses"
import PocketCard from "./Components/PocketCard"
import ExpenseDetail from "./Components/ExpensesDetailCard"

//Styles
import './App.css';

function App() {
//  const [state,setState]=useState({
//    inputOne:0,
//    inputtwo: "",
//    inputThree: 0,

//  }); 
 
  return (
    <div className="App">
  
     <Router>
       <Route exact path="/" component={Landing}/>
       <Route path="/weekly-expenses" 
       render={()=><WeeklyE />} />
     </Router>
    
    </div>
  );
}

export default App;
