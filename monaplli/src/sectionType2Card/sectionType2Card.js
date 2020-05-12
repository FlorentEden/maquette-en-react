import React, {Component} from 'react';
import './sectionType2Card.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faSuitcase, faImages, faPrint } from '@fortawesome/free-solid-svg-icons'

class SectionType2Card extends Component {

  constructor(props){
      super(props);
      this.state = {
        icon:null,
      }
      if (this.props.icon == "planet") {
        this.state.icon = faGlobeAmericas;
      }else if (this.props.icon == "valise") {
        this.state.icon = faSuitcase;
      }else if (this.props.icon == "images") {
        this.state.icon = faImages;
      }else if (this.props.icon == "paper") {
        this.state.icon = faPrint;
      }
    }


    render(){
        return <div className="SectionType2Card">
                  <FontAwesomeIcon className="icon" icon={this.state.icon}/>
                  <h3>{this.props.titre}</h3>
                  <p>{this.props.texte}</p>
                </div>
    }
}

export default SectionType2Card;
