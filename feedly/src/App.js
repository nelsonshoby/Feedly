import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Article from './Components/Article';
import {BrowserRouter as Router,Route,Switch,useLocation} from 'react-router-dom';
import { createContext, useState } from 'react';
import EmptyCategotyList from './Components/EmptyCategotyList';
import ErrorPage from './Components/ErrorPage';
import ErrorBoundary from './Components/ErrorBoundary';


export const ListContext = createContext()
export const BloggContext = createContext()
export const FullDataContext = createContext()
export const TodaysNewsContext = createContext()
export const SelectedCategoryContext = createContext()
export const CategoryBloggContext = createContext()



function App() {
  const [blogg , setBlogg ] = useState([])
  const [blog,setBlogdata] = useState({})
  const [fullData,setFullData] = useState([])
  const [category_check_list, setCategoryCheckList] = useState(["national", "business", "sports","world"]);
  const [todaysNews,setTodaysNews] = useState(true)
  return (
   
    <Router>
      <ErrorBoundary>
    <div className="App">
      <ListContext.Provider value={{category_check_list, setCategoryCheckList}}>
        <BloggContext.Provider value={{blogg , setBlogg}} >
        <FullDataContext.Provider value = {{fullData,setFullData}} >
        <TodaysNewsContext.Provider value = {{todaysNews,setTodaysNews}}>
          <SelectedCategoryContext.Provider value= {{blog,setBlogdata}} >
            
          <NavBar/>
          <div>
          <Switch>
          
          <Route exact path = "/empty"> <EmptyCategotyList/></Route>
            <Route exact path ="/">
                <Home/>
            </Route>
            <Route exact path ="/:category/:slug"
                 component={(props)=><Article {...props} key={window.location.pathname}/>}
            />
            <Route exact path = "*"> <ErrorPage/></Route>
            
          </Switch>
          </div>
         
         </SelectedCategoryContext.Provider>
          </TodaysNewsContext.Provider>
          </FullDataContext.Provider>
        </BloggContext.Provider>   
      </ListContext.Provider>
    </div>
    </ErrorBoundary>
    </Router>
    
  );
}

export default App;
