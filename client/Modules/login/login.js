import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Icon, Checkbox, Button, notification } from 'antd'
import './login.less'
import cookie from 'react-cookies';
import { initHeader, initAnimation, addListener, createCode, code } from '../register/register.canvas'
import Header from '../../components/header/header'

import * as headerActions from '../../components/header/header.action'
import * as loginActions from './login.action'
const FormItem = Form.Item
class LoginForm extends Component {
    state = {
        errors: ''
    }
    componentDidMount() {
        initHeader()
        addListener()
        initAnimation()
        createCode()
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, history } = this.props
        this.props.form.validateFields((err, values) => {
            if (err || !values.username || !values.password) {
                return
            }
            dispatch(loginActions.loginRequest(values, {
                resolve: (user) => {
                    cookie.save("user", user.username)
                    history.push("/music")
                },
                reject: (err) => {
                    notification.error({
                        "message": "登录失败"
                    })
                    this.setState({
                        errors: err
                    })
                }
            }))

        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="wwj-login">
                <Header></Header>
                {
                    this.state.errors ?
                        <p className="error-block">
                            {this.state.errors}
                        </p> : null
                }
                <canvas id="canvas"></canvas>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '用户名不得为空！' }],
                        })(
                            <Input placeholder="Username" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不得为空！' }],
                        })(
                            <Input type="password" placeholder="Password" />
                            )}
                    </FormItem>
                    <FormItem>
                        <Link to="/forgot">忘记密码</Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            立即登录
                        </Button>
                        <div className="login">
                            <span>没有有Good time账号？</span>
                            <Link to="/register">立即注册</Link>
                        </div>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Login = Form.create()(LoginForm);
function mapStateToProps({ login: { currentUser } }) {
    return {
        currentUser,
    }
}
export default connect(mapStateToProps)(Login)