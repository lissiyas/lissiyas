
import Topbar from "./components/Topbar/Topbar";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import './app.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/intro/Intro";
import Education from "./components/education/Education";
import Project from "./components/project/Project";

import Work  from "./components/work/Work";
import Footer from "./components/Footer/Footer";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div>
      
      <Intro/>
      <Work/>
      <Education/>
      <Project/>
      <Footer/>
    
    </div>

    
   </div>
  );
}

export default App;
