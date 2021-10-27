import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Article from './Components/Article';
import {BrowserRouter as Router,Route,Switch,useLocation} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
       <Route exact path ="/">
          <Home/>
      </Route>
      <Route exact path ="/article">
          <Article/>
      </Route>
      </Switch>
      </div>
      
     
    </Router>
  );
}

export default App;
