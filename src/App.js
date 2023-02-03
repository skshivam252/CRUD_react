import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Addlead from './components/Addlead';
import Editlead from './components/Editlead';
import View from './components/View'
import {useState} from 'react'

function  App() {
  // action
  // info
  const [userInfo, setUserInfo] = useState();
  /**
   * {
   * action:
   * info: {
   * Lead
   * }
   * }
   */
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home userInfo={userInfo} setUserInfo={setUserInfo}/>}></Route>
        <Route exact path="/addlead" element={<Addlead/>}></Route>
        <Route exact path="/editlead" element={<Editlead userInfo={userInfo}/>}></Route>
        <Route exact path="/viewlead" element={<View userInfo={userInfo}/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
