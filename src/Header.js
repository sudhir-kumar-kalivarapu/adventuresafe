import { Layout } from 'antd';
import { Badge, Menu, Dropdown,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import "./App.css";
import MapContainer from './Maps';
import Navbar2 from './Header2';
// import { useEffect } from 'react';

const { Sider,Content } = Layout;
const Navbar=() => {
  let navigate = useNavigate();

  const Logout = ()=> {
    localStorage.removeItem('Name');
    navigate("/");
 }

  //  useEffect(()=>{
  //   if (localStorage.getItem("Name")===('')){
  //     navigate("/login-page");
  //     alert('local storage is empty');
  //   }
  //  })
 

  const menu = () => {
    return (
    <Menu>
      <Menu.Item key="1">
         <p>Hi Adventurer</p>
      </Menu.Item>
      <Menu.Item key="2">
      <Button type="primary" onClick={Logout}>
        Log out
      </Button>
      </Menu.Item>
    </Menu>
  );
    };
    return (
        <div>
         <Layout className="layout-1">
             <Sider className="Navbar-sider">
                 <div className="icon-div">
                 <img src="./images/icon.svg" alt="icon" className="icon"/>
                 </div>
                 <div className="Navbar-element">
                   <img src="./images/assets.svg" alt="assets" className="assets"/>
                   <p className="sidebar-text">Assets</p>
                 </div>
                 <div className="Navbar-element">
                   <Badge count={3}>
                   <img src="./images/events.svg" alt="events" className="events"/>
                   </Badge>
                   <p className="sidebar-text">Events</p>
                 </div>
                 <div className="Navbar-element">
                   <Badge count={1}>
                   <img src="./images/messaging.svg" alt="messaging" className="messaging"/>
                   </Badge>
                   <p className="sidebar-text">Messaging</p>
                 </div>
                 <div className="Navbar-element">
                   <img src="./images/admin.svg" alt="admin" className="admin"/>  
                   <p className="sidebar-text">Admin</p>
                 </div>
                 <div className="Navbar-end-element">
                 <Dropdown overlay={menu} trigger={['click']}>
                    <a href="*" className="profile" onClick={e => e.preventDefault()}>
                    <img src="./images/profile.svg" alt="profile"/>
                      <p className="sidebar-text">Profile</p>
                   </a>
                 </Dropdown>
                 </div>
             </Sider>
                <Navbar2/>
                <Content>
                  <MapContainer />
                </Content>
        </Layout>
        </div>
    )
}
export default Navbar;