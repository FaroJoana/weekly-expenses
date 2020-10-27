import React from "react"
import {Link} from "react-router-dom";


export default function Landing(){
    return (
        <div >
            <h1> Weekly Expenses </h1>
            <img clssName="landing" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
            </img>
            <Link to="/weekly-expenses">
              <h1> Get Started</h1>
            </Link>
        </div>
    )
}