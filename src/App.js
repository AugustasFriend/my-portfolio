import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import {Home} from './HomePage/Home';
import {About} from './AboutPage/About';
import {Experience} from './ExperiencePage/Experience';
import {NavBar} from './Shared/NavBar';
import Helmet from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #3A3A3A; }'}</style>
      </Helmet>
      <Router>
       <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
