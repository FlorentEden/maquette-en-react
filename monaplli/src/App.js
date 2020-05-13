import React, { useEffect } from 'react';
import Header from './header/header.js';
import FilAriane from './filAriane/filAriane.js';
import SectionType2Card from './sectionType2Card/sectionType2Card.js'
import VignetteGens from './vignetteGens/vignetteGens.js'
import Footer from './footer/footer.js'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Carousel } from 'react-bootstrap';
import sectionType1Img from './images/sectionType1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
var paragraph1 = {texte:"Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr."}
var paragraph2 = {texte:"Agent info ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."}


function App() {
  useEffect(() => {
    Aos.init({duration: 600});
  }, [])
  return (
    <Router>
          <div>
            <Switch>
              <Route path="/about">
                <Header></Header>
                <FilAriane direction={["Home","About",]}></FilAriane>
                <Container className="Section-Type1">
                  <h2 className="Titre-section">About <span>Our Company</span></h2>
                  <div className="Section-Type1-FlexBox">
                    <div className="SectionType1-FlexBox-Img">
                      <img src={sectionType1Img} alt="Image-bureau"></img>
                    </div>
                    <div className="SectionType1-FlexBox-paragraph">
                      <p>{paragraph1.texte}</p>
                      <p>{paragraph2.texte}</p>
                    </div>
                  </div>
                </Container>
                <Container className="SectionType2" fluid>
                  <Container data-aos="fade-down" data-aos-anchor-placement="top-bottom" className="SectionType2-FlexBox">
                    <SectionType2Card icon="planet" titre="Whole World" texte="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></SectionType2Card>
                    <SectionType2Card icon="valise" titre="Confidentially" texte="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></SectionType2Card>
                    <SectionType2Card icon="images" titre="Good Previews" texte="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></SectionType2Card>
                    <SectionType2Card icon="paper" titre="Confidentially" texte="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></SectionType2Card>
                  </Container>
                </Container>
                <Container className="SectionType3">
                  <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" className="SectionType3-FlexBox1">
                    <h2 className="Titre-section">Our <span>Team</span></h2>
                    <h3>Want to be a part of this teams?</h3>
                  </div>

                  <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="SectionType3-FlexBox2">
                    <VignetteGens img='maria' nom='Maria Spilberg' travail='Manager'></VignetteGens>
                    <VignetteGens img='stan' nom='Stan Barnard' travail='Agent'></VignetteGens>
                    <VignetteGens img='phillip' nom='Phillip Morris' travail='Agent'></VignetteGens>
                    <VignetteGens img='andy' nom='Andy Zuckerberg' travail='Account Manager'></VignetteGens>
                  </div>
                </Container>
                <Container fluid className="SectionType4">
                  <Container className="SectionType4-FlexBox">
                    <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="SectionType4-FlexBox-titre">
                      <h2 className="Titre-section">Subscribe To <span>Our Newsletter</span></h2>
                    </div>
                    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="SectionType4-FlexBox-input">
                      <input placeholder="Your email..."/>
                      <button>SUBSCRIBE</button>
                    </div>
                  </Container>
                </Container>
                <Footer ></Footer>
              </Route>
              <Route path="/">
                <Link to="/about">about</Link>
              </Route>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
