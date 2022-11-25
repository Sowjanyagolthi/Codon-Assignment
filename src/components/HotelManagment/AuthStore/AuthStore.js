import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "react-bootstrap";
import './authStore.css'
import Registration from "./Registration/Registration.js"


export default class AuthStore extends Component {
  render() {
    return (
      <Container className="Container">
        <Row>
          <Col className="columnOne">
            <img className="hotelImage" src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg" alt="HotelImage"/>
          </Col>
          <Col className="columnTwo">
            <Registration/>
          </Col>
        </Row>
      </Container>
    )
  }
}
