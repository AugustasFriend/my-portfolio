import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import {Home} from './HomePage/Home';
import {NavBar} from './Shared/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
       <p>hello</p>
       <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
