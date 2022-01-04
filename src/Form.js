import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "antd/dist/antd.css"
import "./App.css";
import { Form, Input, Button } from 'antd';

const UserForm = () => {
 const [ username,setUsername ] = useState("");
  let navigate=useNavigate();
 const Handle = () =>{
     if(username !==''){
        localStorage.setItem('Name',username);
        navigate('/dashboard')
     } };
     
    return(
        <div className="form">
            <Form >
                <Form.Item name="username"
                           label="USERNAME"
                           rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input  className="input-name"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            >
                    </Input>
                </Form.Item>
                <Form.Item name="password"
                           label="PASSWORD"
                           rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type="password"
                           className="input-password">
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Button 
                    className="input-button"
                    block type="primary" 
                    htmlType="submit" 
                    onClick={Handle}
                    >SIGN IN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UserForm;