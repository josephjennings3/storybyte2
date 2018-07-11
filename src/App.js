import React, { Component } from 'react';
import './App.css';
import {
  Col,
  Image,
  Grid,
  Row
} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
    	<div className="container">
        <Grid>
          <Row>
            <div className="top">
              <Col mdOffset={3} md={6}><Image src="/logo.png" rounded /></Col>
            </div>
          </Row>
          <Row>
            <div className="box box1 border">
              <Col md={4}>
                sample
              </Col>
            </div>
            <div className="box box2 border">
              <Col md={4}>
                sample
              </Col>
            </div>
            <div className="box box3 border">
              <Col md={4}>
                sample
              </Col>
            </div>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
