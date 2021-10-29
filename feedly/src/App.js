import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Article from './Components/Article';
import {BrowserRouter as Router,Route,Switch,useLocation} from 'react-router-dom';
import { createContext, useState } from 'react';
import EmptyCategotyList from './Components/EmptyCategotyList';
import ErrorPage from './Components/ErrorPage';

export const ListContext = createContext()
export const BlogContext = createContext()
export const FullDataContext = createContext()

function App() {
  const [blogg , setBlogg ] = useState([])
  const [fullData,setFullData] = useState([])
  const [category_check_list, setCategoryCheckList] = useState(["national","all", "sports", "business"]);
  return (
    <Router>
    <div className="App">
      <ListContext.Provider value={{category_check_list, setCategoryCheckList}}>
        <BlogContext.Provider value={{blogg , setBlogg}} >
          <FullDataContext.Provider value = {{fullData,setFullData}} >
          <NavBar/>
          <div>
          <Switch>
          <Route exact path = "/empty"> <EmptyCategotyList/></Route>
            <Route exact path ="/">
                <Home/>
            </Route>
            <Route exact path ="/article">
                <Article/>
            </Route>
            <Route exact path = "*"> <ErrorPage/></Route>
          </Switch>
          </div>
          </FullDataContext.Provider>
        </BlogContext.Provider>   
      </ListContext.Provider>
    </div>
      
     
    </Router>
  );
}

export default App;
