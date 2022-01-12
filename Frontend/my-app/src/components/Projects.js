import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, Row, Col, Button, CardHeader } from 'reactstrap';
import Jumbotron from './Jumbotron';
import axios from "axios";

const Projects = () => {

  const [github, setGithub] = useState([]);
  const [dataLoaded, setLoaded] = useState(false);

  const GITHUB_USERNAME = 'Nitsua365';

  useEffect(() => {
      axios.get(
        `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${GITHUB_USERNAME}`
      ).then(res => {
        setGithub(res.data);
      }).then(() => {
        setLoaded(true);
        // console.log(github);
      })
      .catch(err => {
        console.error(err);
      })
     
  }, []);

  return (
    <>
      <Jumbotron header='Projects' subMsg='These are my projects' />

      <div className='GitHub-Cards'>
        <Row id='Github-Cards-FirstRow'>
        <Col sm="4">
          {dataLoaded && <Card body outline color="secondary" id="cardOne">
            <CardTitle id="cardOne-title">{github[0].repo}</CardTitle>
            <CardText>{github[0].description}</CardText>
            <CardSubtitle>Language: {github[0].language}</CardSubtitle>
            <Button>Checkout {github[0].repo}</Button>
          </Card>}
        </Col>
        <Col sm="4">
          {dataLoaded && <Card body outline color="secondary" id="cardTwo">
            <CardTitle id="cardTwo-title">{github[1].repo}</CardTitle> 
            <CardText>{github[1].description}</CardText>
            <CardSubtitle>Language: {github[1].language}</CardSubtitle>
            <Button>Checkout {github[1].repo}</Button> 
          </Card>}
        </Col>
        <Col sm="4">
          {dataLoaded && <Card body outline color="secondary" id="cardThree">
            <CardTitle id="cardThree-title">{github[2].repo}</CardTitle>
            <CardText>{github[2].description}</CardText>
            <CardSubtitle>Language: {github[2].language}</CardSubtitle>
            <Button>Checkout {github[2].repo}</Button> 
          </Card>}
        </Col>
        </Row>

        <Row id='Github-Cards-SecondRow'>
        <Col sm="4">
          {dataLoaded && <Card body outline color="secondary" id="cardFour">
            <CardTitle id="cardFour-title">{github[3].repo}</CardTitle>
            <CardText>{github[3].description}</CardText>
            <CardSubtitle>Language: {github[3].language}</CardSubtitle>
            <Button>Checkout {github[3].repo}</Button> 
          </Card>}
        </Col>
        <Col sm="4">
          {dataLoaded && <Card body outline color="secondary" id="cardFive">
            <CardTitle id="cardFive-title">{github[4].repo}</CardTitle>
            <CardText>{github[4].description}</CardText>
            <CardSubtitle>Language: {github[4].language}</CardSubtitle>
            <Button>Checkout {github[4].repo}</Button> 
          </Card>}
        </Col>
        <Col sm="4">
          {dataLoaded && <Card body outline color="secondary" id="cardSix">
            <CardTitle id="cardSix-title">{github[5].repo}</CardTitle>
            <CardText>{github[5].description}</CardText>
            <CardSubtitle>Language: {github[5].language}</CardSubtitle>
            <Button>Checkout {github[5].repo}</Button> 
          </Card>}
        </Col>        
        </Row>
      </div>

    </>
  )
}

export default Projects;