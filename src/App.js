import logo from './logo.svg';
import './App.css';
import User from './component/User/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserProfile from './component/UserProfile/UserProfile';
import Header from './component/Header/Header';
import Details from './component/Details/Details';



function App() {
  return (
    <div className="App">
     
     <Header />
     
     <Router>
     
     <Switch>
     <User />
       <Route path="/home">
        <Details/>
       </Route>
       </Switch>
     </Router>
    
     
    </div>
  );
}

export default App;
