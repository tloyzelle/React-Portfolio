import React from "react";
import { Container  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
<Container> 
<div className="text-center">
<ul>
<li className="list-group-item">
<a className="list-group-item list-group-item-action" href= "https://github.com/tloyzelle">View My Github Repository</a>
</li>
<li className= "list-group-item"> 
<a className="list-group-item list-group-item-action" href ="../../assets/taeganLoyzelle.pdf">View My Resume</a>
</li>
<li className= "list-group-item"> 
<a className="list-group-item list-group-item-action"  href="mailto:tloyzelle@gmail.com">tloyzelle@gmail.com</a>
</li>
<li className= "list-group-item"> 
<a className="list-group-item list-group-item-action" href="https://linkedin.com/in/tloyzelle">LinkdIn Profile</a>
</li> 

</ul>
</div>
</Container> 
  );
  }
  
  export default Contact;