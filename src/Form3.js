import React from 'react';
import "antd/dist/antd.css"
import "./App.css";
import { Form, Input, Button } from 'antd';

function form() {
    return(
        <div className="form">
            <Form>
                <Form.Item name="username"
                
                rules={[{ required: true, message: 'Please input your username!' }]}
                 
                >
                <div>
                    <label className="text">USERNAME</label>
                    </div>
                    <Input  
                    className="input-name">
                    </Input>
                </Form.Item>
                <Form.Item name="password"
                
                rules={[{ required: true, message: 'Please input your password!' }]}
                
                >
                    <div>
                    <label className="text">PASSWORD</label>
                    </div>
                    <Input 
                    type="password"
                    className="input-password">     
                    </Input>
                    <span className="forgot-element">
                            Forgot?
                     </span>
                </Form.Item>
                <Form.Item>
                    <Button 
                    className="input-button"
                    block type="primary" 
                    htmlType="submit" 
                    >SIGN IN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default form;