function About() {
    return (
        <div style={{marginTop: "20px", marginRight: "10px", marginLeft: "10px"}}>
            <div className="col s12 m7">
                <div className="card horizontal" style={{borderRadius: "10px"}}>
                    <div className="card-stacked">
                        <div className="card-content">
                            <a href="/" className="secondary-content" style={{marginTop: "-20px", marginRight: "-15px"}}><i className="material-icons" style={{color: "black"}}>close</i></a>
                            <h5 style={{fontFamily: "Domine", fontWeight: "bold"}}>Skills: </h5>
                            <p style={{fontFamily: "Domine"}}>Javascript | HTML | CSS | React | React Materialize |  MongoDB | Elephant SQL  |  Bootstrap | Styled Components | SASS | Node.js | Express | jQuery | AJAX | Github</p>
                        </div>
                        <div className="card-action">
                            <a href="#" target="_blank" rel="noreferrer">Resume</a>
                            <a href="https://github.com/mbucheli" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://www.linkedin.com/in/mavi-bucheli/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;