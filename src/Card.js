import React from "react";
import { Card, Row, Col } from 'antd';
import "./App.css";
import Form from "./Form";


function card(){
    return(
        <div className="card-container">
        <Row gutter={16}>
          <Col xs={24} sm={8} md={12} lg={12} xl={24}>
            <Card className="card">
              <header className="card-header">
                <img src="./images/logo.svg" alt="logo" className='logo'/>
              </header>
              <Form />
              <hr />
              <footer className="footer">
                <p className="footer-data">New to AdventureSafe?</p>
                <p className="footer-data">Create An Account</p>
              </footer> 
            </Card>
          </Col>
        </Row>
      </div>
    )
}
export default card;