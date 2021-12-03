function ContactMe() {
    return (
        <div>
            <ul className="collection" style={{ width: "70%", marginRight: "auto", marginLeft: "auto", marginTop: "150px", fontFamily: "Domine", borderRadius: "10px", boxShadow: "5px 5px rgba(2, 2, 2, 0.1" }}>
                {/* Name */}
                <li className="collection-item avatar" style={{ height: "15vh", paddingTop: "45px" }}>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/web-developer-16-957564.png" alt="" className="circle" />
                    <span className="title" style={{ fontWeight: "Bold", fontSize: "22px" }}>Developer:</span>
                    <p style={{ fontSize: "18px" }}>Mavi Bucheli</p>
                    <a href="#!" className="secondary-content" style={{ paddingTop: "25px", paddingRight: "25px" }}><i className="material-icons" style={{ color: "#847f9b", fontSize: "35px" }}>person_pin</i></a>
                </li>
                {/* Email */}
                <li className="collection-item avatar" style={{ height: "15vh", paddingTop: "45px" }}>
                    <img src="https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico" alt="" className="circle" />
                    <span className="title" style={{ fontWeight: "Bold", fontSize: "22px" }}>Email:</span>
                    <p style={{ fontSize: "18px" }}>mavibucheli@gmail.com</p>
                    <a href="#!" className="secondary-content" style={{ paddingTop: "25px", paddingRight: "25px" }}><i className="material-icons" style={{ color: "#847f9b", fontSize: "35px" }}>contact_mail</i></a>
                </li>
                {/* Phone */}
                <li className="collection-item avatar" style={{ height: "15vh", paddingTop: "45px" }}>
                    <i className="material-icons circle green">phone</i>
                    <span className="title" style={{ fontWeight: "Bold", fontSize: "22px" }}>Phone:</span>
                    <p style={{ fontSize: "18px" }}>(201)682-2157</p>
                    <a href="#!" className="secondary-content" style={{ paddingTop: "25px", paddingRight: "25px" }}><i className="material-icons" style={{ color: "#847f9b", fontSize: "35px" }} >contact_phone</i></a>
                </li>
                {/* LinkedIn */}
                <li className="collection-item avatar" style={{ height: "15vh", paddingTop: "45px" }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-3691226-3073746.png" alt="" className="circle" />
                    <span className="title" style={{ fontWeight: "Bold", fontSize: "22px" }}>LinkedIn</span>
                    <p style={{ fontSize: "18px" }}><a href="https://www.linkedin.com/in/mavi-bucheli/" target="_blank">My Profile</a></p>
                    <a href="#!" className="secondary-content" style={{ paddingTop: "25px", paddingRight: "25px" }}><i className="material-icons" style={{ color: "#847f9b", fontSize: "35px" }}>compare_arrows</i></a>
                </li>
            </ul>
        </div>
    );
};

export default ContactMe;