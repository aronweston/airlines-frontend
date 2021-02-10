import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Flights from './pages/Flights'
import SingleFlight from './pages/SingleFlight'
import Search from './pages/Search'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mx-auto px-5 max-width-lg my-10">
      <Switch>
        <Route component={ Search } path='/' exact />
        <Route component={ SingleFlight } path='/flights/:id' />
        <Route component={ Flights } path='/flights/' />
        <Route component={ Search } path='/search' />
        <Route component={ Login } path='/login' />
        </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;


