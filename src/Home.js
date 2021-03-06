import { Link } from "react-router-dom";

function Home() {
    return(
        <div style={{textAlign: "center", marginTop: "250px", marginBottom: "100px"}}>
            <Link to="/about" 
            className="waves-effect waves-light btn pulse" 
            style={{width: "55vw", height: "45vh", backgroundColor: "#e1dee9", color: "black", borderRadius: "10px", fontFamily: "Domine", paddingTop: "15px"}}>
                <h5 style={{fontWeight: "bolder", marginTop: "70px"}}>About Me</h5>
                <p style={{marginTop: "40px"}}>A multilingual Software Engineer who loves front-end development and solving puzzles. Front-end development, like puzzles, demands that everything connects in order to be solved. Delivering any solution is immensely rewarding and truly motivating. Drawn to UI, committed to client satisfaction and user experience.</p>
                <i className="large material-icons" style={{textAlign: "center", fontSize: "30px", color: "#a09abc", paddingTop: "20px"}}>add_circle</i>
            </Link>
            </div>
    );
};

export default Home;