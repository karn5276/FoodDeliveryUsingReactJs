import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup.js';
// import { useEffect } from 'react';

// below lines we are import b'coz our colouser images are not changes when click on button.
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {

 

  return (
    <Router>
      <div >
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/signup" element={<Signup></Signup>}></Route>
          {/* here exact path is match with Link in navbar file  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
