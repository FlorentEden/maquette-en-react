import React, {Component} from 'react';
import './footer.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../images/logo2.png';
import SocialLink from '../header/socialLink/socialLink.js';





class Footer extends Component {

  constructor(props){
      super(props);
      this.state = {
      }
    }


    render(){
        return <div className="Footer">
                  <div className="Footer-FlexBox">
                    <div className="Footer-FlexBox-logo">
                      <img src={logo}></img>
                      <ul>
                        <SocialLink media="facebook"></SocialLink>
                        <SocialLink media="pinterest"></SocialLink>
                        <SocialLink media="instagram"></SocialLink>
                        <SocialLink media="google+"></SocialLink>
                      </ul>
                    </div>
                    <div className="Footer-FlexBox-Navigation">
                      <h4>Navigation</h4>
                      <div>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Property</li>
                        <li>Gallery</li>
                        <li>Our Blog</li>
                        <li>Contacts</li>
                      </div>
                    </div>
                    <div className="Footer-FlexBox-forClients">
                      <h4>For clients</h4>
                      <div>
                        <li>Sign in</li>
                        <li>Forum</li>
                        <li>Promotions</li>
                        <li>News</li>
                      </div>
                    </div>
                    <div className="Footer-FlexBox-ContactUs">
                      <h4>Contact us</h4>
                      <div>
                        <p>240 Central Park, London OR 10019</p>
                        <li>Freephone: +1 800 559 6580</li>
                        <li>Telephone: +1 959 603 6035</li>
                        <li>FAX: +1 800 559 6580</li>
                        <p><span>info@realhome.com</span></p>
                      </div>
                    </div>
                  </div>
                </div>
    }
}






export default Footer;
