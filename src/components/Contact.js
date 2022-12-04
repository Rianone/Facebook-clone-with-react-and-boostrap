import {useState} from 'react';


function Contact(props) {
    return (<a>
        <div className="d-flex left-box-element ps-2 pt-2 pb-2 rounded">
          <img src={props.image} alt="profile image" className="rounded-circle right-image"/>
          <span className="online me-3 p-1"></span>
          <span className="align-self-center">{props.text}</span>
        </div>
     </a> );
}

export default Contact;