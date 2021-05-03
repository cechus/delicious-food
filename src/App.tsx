import React from "react"

import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./Layouts/Home"
import Header from "./Components/Header/Header"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
