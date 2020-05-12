import React, {Component} from 'react';
import './filAriane.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

class FilAriane extends Component {

  constructor(props){
      super(props);
      this.state = {
      }
    }


    render(){
        return <Container className="FilAriane">
                {this.props.direction.map((item, i) => {
                  if (i == this.props.direction.length-1) {
                    return <p key={i}>{item}</p>;
                  }else {
                    return <p key={i}><Link to={"/"+item}>{item}</Link><FontAwesomeIcon id='fontIcon' icon={faLongArrowAltRight}/></p>;
                  }
                } )}
              </Container>
    }
}

export default FilAriane;
