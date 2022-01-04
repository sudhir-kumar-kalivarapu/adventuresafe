import React from 'react';
import 'antd/dist/antd.css';
import "./App2.css";
import { Layout } from 'antd';
import { Tabs } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Dropdown } from 'antd';


const { Header } = Layout;
const { TabPane } = Tabs;


function Navbar2() {
  const menu = (
    <Menu>
      <Menu.Item>
        CURRENT WEATHERS
      </Menu.Item>
      <Menu.Item>
        AREA-CONDITIONS
      </Menu.Item>
      <Menu.Item>
         ACTIVE-EVENTS
      </Menu.Item>
      <Menu.Item>
         REFRESH
      </Menu.Item>
      <Menu.Item>
         LAST-UPDATED
      </Menu.Item>
    </Menu>
  );
  const filter = (
    <Menu>
      <Menu.Item>
         Nautical filter
      </Menu.Item>
      <Menu.Item disabled>
         preset-filter
      </Menu.Item>
      <Menu.Item disabled>
          preset-filter
      </Menu.Item>
      <Menu.Item>
        preset-filter
      </Menu.Item>
    </Menu>
  );
    return (
        <div>
            <Layout>   
                <Header className="header">
                   <Row justify="space-between">
                      <Col>
                    <div className="div-a">
                      <div className="div-1">
                        <h1 className="area-class">N. Little Rock Metro Area</h1>
                          
                        <div className="div-1-2">
                        <img src="./images/down.svg" alt="down" className="down"/>
                          <img src="./images/refresh.svg" alt="refresh" className="refresh"/>
                            <p className="Last-update">Last update</p>
                            <p className="am">9:15am</p>
                        </div>
                      </div>
                        <div className="div-2">
                        <Tabs className="tabs-list-view">
                             <TabPane className="tab-1" tab="Nautical-Filter" key="1"></TabPane>
                             <TabPane className="tab" tab="Filter-preset" key="2"></TabPane>
                             <TabPane className="tab" tab="Filter-preset" key="3"></TabPane>
                             <TabPane className="tab" tab="Filter-preset" key="4"></TabPane>
                        </Tabs>
                        </div>
                    </div>
                         </Col>
                         <Col>
                        <div className="text">
                            <div>
                                <h6 className="div-text">CURRENT WEATHER</h6>
                                <p className="text-58">58</p>
                            </div>
                            <div>
                                <h6 className="div-text">AREA CONDITIONS</h6>
                                <p className="text-58">dry</p>
                            </div>
                            <div>
                                <h6 className="div-text">ACTIVE EVENTS</h6>
                                <p className="text-58">6</p>
                            </div>
                        </div>
                        </Col>
                        </Row>    
                        <Dropdown overlay={menu}>
                          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                          <i class="fas fa-bars"></i>
                         </a>
                       </Dropdown>      
                        <Dropdown overlay={filter}>
                           <a className="ant-dropdown-filter" onClick={e => e.preventDefault()}><i class="fas fa-filter"></i></a>
                        </Dropdown> 
                </Header>       
         
           </Layout>
        </div>
    )
    }
export default Navbar2
