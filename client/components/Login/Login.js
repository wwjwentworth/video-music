import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.less'
const FormItem = Form.Item
class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        })
    }
    render() {
        const { title_img } = this.props
        const { getFieldDecorator } = this.props.form;
        console.log(this.props)
        return (
            <div className="wwj-login">
                <Form onSubmit={this.handleSubmit.bind(this)}
                    className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator('username',{
                                rules:[{
                                    required:true,
                                    message:'please input your username!'
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password',{
                                rules:[{
                                    required:true,
                                    message:'please input yout password'
                                }]
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('remember',{
                                valuePropName:'checked',
                                initialValue:true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )
                        }
                        <a href="" className="forgot">Forgot password</a>
                        <Button htmlType="submit"
                            className="form-btn">登录</Button>
                        <Link to="/register" className="register">没有账号，立即注册</Link>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const login = state.login
    return {
        title_img: login.title_img
    }
}
const NormalLoginForm = Form.create()(Login)
export default connect(mapStateToProps)(NormalLoginForm)