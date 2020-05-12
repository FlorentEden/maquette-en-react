import React, {Component} from 'react';
import SocialLink from './socialLink/socialLink.js';
import logo from '../images/logo.png';
import '../App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

  constructor(props){
      super(props);
      this.state = {
      }
    }


    render(){
        return <Navbar className="Header" collapseOnSelect expand="lg" bg="light" variant="light">
                  <Container>
                    <Link to="/"><img src={logo}></img></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="ml-auto mr-auto">
                        <Nav.Link className="linkHeader">Home</Nav.Link>
                        <Nav.Link className="linkHeader">About Us</Nav.Link>
                        <Nav.Link className="linkHeader">Property</Nav.Link>
                        <Nav.Link className="linkHeader">Our Blog</Nav.Link>
                        <Nav.Link className="linkHeader">Contacts</Nav.Link>
                      </Nav>
                      <Nav className="navbar-nav-social">
                      <Nav.Link className="linkHeader" href="#facebook"><SocialLink media="facebook"></SocialLink></Nav.Link>
                      <Nav.Link className="linkHeader" href="#pinterest"><SocialLink media="pinterest"></SocialLink></Nav.Link>
                      <Nav.Link className="linkHeader" href="#instagram"><SocialLink media="instagram"></SocialLink></Nav.Link>
                      <Nav.Link className="linkHeader" href="#google+"><SocialLink media="google+"></SocialLink></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
    }
}

export default Header;
