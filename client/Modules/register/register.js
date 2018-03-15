import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import { initHeader, initAnimation, addListener, createCode, code } from './register.canvas'

import * as registerActions from './register.action'

import './register.less'
const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;
class RegistrationForm extends Component {
    state = {
        visiblePassword: false,
        visibleConfirmPassword: false,
        errors: '',
        redirectUrl: null
    }
    componentDidMount() {
        initHeader()
        addListener()
        initAnimation()
        createCode()
    }
    handleSubmit = (e) => {
        const { dispatch, history } = this.props
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return
            }
            dispatch(registerActions.register(values, {
                resolve: () => {
                    history.push('/login')
                },
                reject: (err) => {
                    this.setState({
                        errors: err
                    })
                }
            }))

        });

    }
    returnToLogin = () => {
        const { history } = this.props
        history.push('/login')
    }
    handleConfirmPassword = (rule, value, callback) => {
        const { getFieldValue } = this.props.form
        if (value && value !== getFieldValue('password')) {
            callback('两次输入的密码不一致！')
        }
        callback()
    }
    handleCheckCode = (rule, value, callback) => {
        const { getFieldValue } = this.props.form
        if (value && value.toUpperCase() !== code.toUpperCase()) {
            callback('验证码不正确！')
        }
        callback()
    }
    render() {
        const { form: { getFieldDecorator }, register: { isLoading } } = this.props;
        return (
            <div className="wwj-register" id="wwj-register">
                {
                    !isLoading ?
                        <div>
                            {
                                this.state.errors ?
                                    <p className="error-block">
                                        {this.state.errors}
                                    </p> : null
                            }
                            <canvas id="canvas"></canvas>
                            <div className="wrap"></div>
                            <Form onSubmit={this.handleSubmit} >
                                <FormItem label="用户名" >
                                    {getFieldDecorator('name', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '用户名不得为空！'
                                            }, {
                                                pattern: /^[\u4E00-\u9FA5\w0-9_@#$*!]+$/,
                                                message: '不能输入特殊字符！'
                                            }],
                                    })(
                                        <Input placeholder="请输入用户名" />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="邮箱" >
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email', message: '这不是一个有效的邮箱！',
                                        }, {
                                            required: true, message: '邮箱不得为空！',
                                        }],
                                    })(
                                        <div className="email">
                                            <Input placeholder="请输入注册邮箱" onChange={() => this.setState({ error: '' })} />
                                            {
                                                this.state.error ?
                                                    <span className="error-block">
                                                        <Icon type="exclamation-circle" />
                                                        {this.state.error}
                                                    </span> : null
                                            }

                                        </div>
                                        )
                                    }
                                </FormItem>
                                <FormItem label="密码" >
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '密码不得为空！'
                                            }, {
                                                pattern: /^[\w0-9_@#$*!]+$/,
                                                message: '不能输入特殊字符！'
                                            }],
                                    })(
                                        <div className="password">
                                            <Input type={this.state.visiblePassword ? 'text' : 'password'} placeholder="请输入密码" />
                                            <span className={`eye ${this.state.visiblePassword ? 'open' : 'close'}`}
                                                onClick={() => this.setState({
                                                    visiblePassword: !this.state.visiblePassword
                                                })}>
                                            </span>
                                        </div>
                                        )
                                    }
                                </FormItem>
                                <FormItem label="确认密码" >
                                    {getFieldDecorator('confirmPassword', {
                                        rules: [{
                                            required: true,
                                            message: '密码确定不得为空！'
                                        }, {
                                            validator: this.handleConfirmPassword
                                        }]
                                    })(
                                        <div className="confirm-password">
                                            <Input type={this.state.visibleConfirmPassword ? 'text' : 'password'} placeholder="请再次输入密码" />
                                            <span className={`eye ${this.state.visibleConfirmPassword ? 'open' : 'close'}`}
                                                onClick={() => this.setState({
                                                    visibleConfirmPassword: !this.state.visibleConfirmPassword
                                                })}>
                                            </span>
                                        </div>
                                        )}
                                </FormItem>
                                <FormItem label="验证码">
                                    {getFieldDecorator('checkcode', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '验证码不得为空！'
                                            }, {
                                                validator: this.handleCheckCode
                                            }],
                                    })(
                                        <div className="check-code">
                                            <Input placeholder="请输入右侧验证码" />
                                            <canvas id="checkCode" onClick={() => createCode()}></canvas>
                                        </div>
                                        )
                                    }
                                </FormItem>
                                <FormItem className="foot">
                                    <Button type="primary"
                                        htmlType="submit"
                                        className="reg-form-btn">
                                        立即注册
                            </Button>
                                    <div className="login">
                                        <span>已有Good time账号？</span>
                                        <Link to="/login">立即登录</Link>
                                    </div>
                                </FormItem>
                            </Form>
                        </div> : null
                }
                {
                    isLoading ?
                        <div className="loading">
                            <div></div>
                            <p>loading</p>
                        </div> : null
                }
            </div>
        )
    }
}
const Register = Form.create()(RegistrationForm);
function mapStateToProps({ register,header }) {
    return {
        register,
        header
    }
}
export default connect(mapStateToProps)(Register)