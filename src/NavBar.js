import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
    <div className="nav-wrapper" style={{backgroundColor: "#a09abc"}}>
      <a href="/" className="brand-logo" style={{fontFamily: "Pacifico, cursive", fontSize: "35px", paddingLeft: "15px"}}>Hi, I'm Mavi</a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/projects">Projects<i className="material-icons right">work</i></Link></li>
        <li><Link to="/contactme">Contact Me<i className="material-icons right">contacts</i></Link></li>
      </ul>
    </div>
  </nav>
    );
};

export default NavBar;