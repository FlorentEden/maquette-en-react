import React, {Component} from 'react';
import './vignetteGens.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import andy from '../images/andy.png'
import maria from '../images/maria.png'
import phillip from '../images/phillip.png'
import stan from '../images/stan.png'



class VignetteGens extends Component {

  constructor(props){
      super(props);
      this.state = {
        img: null,
      }
      if (this.props.img == 'andy') {
        this.state.img = andy;
      }else if (this.props.img == 'maria') {
        this.state.img = maria;
      }else if (this.props.img == 'phillip') {
        this.state.img = phillip;
      }else if (this.props.img == 'stan') {
        this.state.img = stan;
      }
    }


    render(){
        return <div className="VignetteGens">
                  <img src={this.state.img}></img>
                  <h3>{this.props.nom}</h3>
                  <p>{this.props.travail}</p>
                </div>
    }
}

export default VignetteGens;
