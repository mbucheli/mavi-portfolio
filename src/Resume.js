function Resume() {
    return (
        <div style={{fontFamily: "Domine"}}>
            {/* Relevant Experience */}
            <ul class="collection with-header" style={{width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "80px", borderRadius: "5px"}}>
                <li class="collection-header"><h4 style={{color: "#e1ad01"}}>Relevant Experience</h4></li>
                <li class="collection-item">
                    <h6 style={{fontWeight: "bold", paddingBottom: "20px"}}>Self-Employed | Pet Care Provider | Union City, NJ (October 2018 - Present)</h6>
                    <ul style={{paddingLeft: "20px"}}>
                        <li style={{listStyle: "circle"}}>
                        Provide pet care services, such as dog walking and training, pet sitting, and administering medicine for 15 clients per week 
                        </li>
                        <li style={{listStyle: "circle"}}>
                        Organize appointments and manage schedules accordingly to meet clients needs  
                        </li>
                        <li style={{listStyle: "circle", paddingBottom: "20px"}}>
                        Increased clientele base through local networking, which led to a 25% boost in revenue  
                        </li>
                    </ul>
                    </li>
                <li class="collection-item">
                <h6 style={{fontWeight: "bold", paddingBottom: "20px"}}>Flying Tiger | Assistant Manager | Paramus, NJ (October 2017 - November 2019)</h6>
                    <ul style={{paddingLeft: "20px"}}>
                        <li style={{listStyle: "circle"}}>
                        Delegated and trained staff members  
                        </li>
                        <li style={{listStyle: "circle"}}>
                        Changed company training method for new employees to raise productivity and efficiency, which resulted in a sales increase of 10% per week 
                        </li>
                        <li style={{listStyle: "circle", paddingBottom: "20px"}}>
                        Selected new and reviewed old products, and helped decipher reports and predicted future sales
                        </li>
                    </ul>
                </li>
            </ul>
            {/* Education */}
            <ul class="collection with-header" style={{width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "40px", borderRadius: "5px"}}>
                <li class="collection-header"><h4 style={{color: "#e1ad01"}}>Education</h4></li>
                <li class="collection-item">
                    <h6 style={{fontWeight: "bold", paddingBottom: "20px"}}>Software Engineering Immersive | General Assembly | Remote	(August 2021 - November 2021)</h6>
                    <ul style={{paddingLeft: "20px"}}>
                        <li style={{listStyle: "circle", paddingBottom: "20px"}}>
                        Completed over 500 hours of a full-stack remote program over a three month period. Offering experience and lessons of front- and 
                        back-end technologies, and programming tools like Javascript, HTML, CSS, SASS, Bootstrap, jQuery, AJAX, React, Express, NodeJS, 
                        MongoDB, ElephantSQL, Ruby, Rails, and Github.
                        </li>
                    </ul>
                    </li>
            </ul>
        </div>
    );
};

export default Resume;