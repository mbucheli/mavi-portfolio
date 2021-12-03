import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
    <div className="nav-wrapper" style={{backgroundColor: "#a09abc"}}>
      <a href="/" className="brand-logo" style={{fontFamily: "Pacifico, cursive", fontSize: "36px", paddingLeft: "15px"}}>Hi, I'm Mavi</a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/projects" style={{ fontSize: "25px", fontFamily: "Domine"}}>Projects<i className="material-icons right">work</i></Link></li>
        <li style={{ marginLeft: "10px", marginRight: "15px"}}><Link to="/contactme" style={{ fontSize: "25px", fontFamily: "Domine"}}>Contact Me<i className="material-icons right">contacts</i></Link></li>
      </ul>
    </div>
  </nav>
    );
};

export default NavBar;