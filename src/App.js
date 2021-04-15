import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PayCalculator from './pages/PayCalculator';
import JobInfo from './pages/JobInfo';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <>
      <NavBar/>
      <Route
        path='/'
        exact
        render={()=><Home/>}
      />
      <Route
        path='/paycalc'
        render={()=><PayCalculator/>}
      />
      <Route
        path='/jobinfo'
        render={()=><JobInfo/>}
      />
      <Route
        path='/aboutus'
        render={()=><AboutUs/>}
      />
    </>
  );
}

export default App;
