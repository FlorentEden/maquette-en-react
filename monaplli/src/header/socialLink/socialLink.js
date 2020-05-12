import React, {Component} from 'react';
import './socialLink.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faPinterestP, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'


class SocialLink extends Component {

  constructor(props){
      super(props);
      this.state = {
        icon: null,
      }
      if (this.props.media == "facebook") {
        this.state.icon = faFacebookF;
      }else if (this.props.media == "pinterest") {
        this.state.icon = faPinterestP;
      }else if (this.props.media == "instagram") {
        this.state.icon = faInstagram;
      }else if (this.props.media == "google+") {
        this.state.icon = faGooglePlusG;
      }
    }


    render(){
        return <div className="SocialHeader">
                <FontAwesomeIcon icon={this.state.icon}/>
              </div>
    }
}

export default SocialLink;
