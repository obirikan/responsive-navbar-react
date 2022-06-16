import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
           <Route path='/' exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
