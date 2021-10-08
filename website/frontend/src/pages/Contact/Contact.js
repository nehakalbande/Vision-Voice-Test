// import React, { useEffect } from "react";
// import "./Contact.css";


// const Contact = () => {
//     useEffect(() => {
//         document.title = "Contact ";
//     });
//     return (
//     //    <><h2>Contact Us</h2><p>We will be happy to answer your questions</p>
//     //    <div>

//     //        <p>Mail to us your queries at:padsafsf</p>
//     //        <br></br>
//     //        <p>Phone:3534534</p>
//     //        <p>we will answer your queries within 24 hours</p>
//     //        </div></>

//     );
// };

// export default Contact;

import React from "react";
import {Link} from 'react-router-dom';
// import Style from "style-it";
import"./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelopeOpen, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const Contact = () => {
  return (
    <div className="ui" style={{ textAlign: "center", marginLeft: "400px" }}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <><h2>Contact Us</h2><br /><h4>We are happy to answer your queries!</h4>
                  <div>
                    <br />
                    <div>
                    <a  href="mailto:visionvoice@gmail.com"><p>
                    <FontAwesomeIcon size="3x" className="hovery" color={ 'black' } icon={faEnvelopeOpen} /></p><p>Mail Us</p></a>
                    </div>
                   <a  href={"tel:9873241"}> <p> <FontAwesomeIcon 
                   className="hovery"
                    size="3x"
                    color={ 'black' }
                    icon={faPhoneSquareAlt} 
                    ></FontAwesomeIcon></p><p >Call Us </p></a>
                    <br />
                    <p>We will reach up to you within 24 hours</p><br />
                  </div></>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </div>
  );
};

export default Contact;
// export default UrClass;