import React, { Component } from 'react';
import { Icon, Input, Button, Form, notification } from 'antd';
import 'antd/dist/antd.css'
import './login.css'

const uName = "playtonia"
const pass = "play@123"

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameInput: "",
            passwordInput: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const { usernameInput, passwordInput } = this.state
        usernameInput == uName && passwordInput == pass ? this.successNotification('success')
            : this.failedNotification('error');
    }
    successNotification = (type) => {
        notification[type]({
            message: 'Login Success',
        });
       return this.props.history.push('/dashboard');

    };

    failedNotification = (type) => {
        notification[type]({
            message: 'Login Failed',
            description: 'Please enter the valid credentials',
        });
        };

    handleChange(e, code) {
        if (code == 'userName') {
            this.setState({ usernameInput: e.target.value });
        } else if (code == 'password') {
            this.setState({ passwordInput: e.target.value });
        }
    }

    render() {
        return (
            <div className="parentComponent">
                <div className="childComponent">
                    <Form>
                        <div className="img">
                            <img src="playIcon.jpg" height="100" width="100"></img>
                        </div>
                        <div className="userName">
                            <Input prefix={<Icon type="user"
                                style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username" onChange={e => this.handleChange(e, "userName")} />
                        </div>
                        <div className="password">
                            <Input prefix={<Icon type="lock"
                                style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password" placeholder="Password" onChange={e => this.handleChange(e, "password")} />
                        </div>
                        <div className="submit">
                            <Button type="primary" htmlType="submit"
                                className="login-form-button" onClick={this.handleSubmit}>
                                Log in
          </Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Login;