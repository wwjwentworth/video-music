import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Icon, Checkbox, Button, notification } from 'antd'
import './login.less'
import cookie from 'react-cookies';
import * as headerActions from '../../components/header/header.action'
import * as loginActions from './login.action'
const FormItem = Form.Item
class LoginForm extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(headerActions.refresh())
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch, history} = this.props
        this.props.form.validateFields((err, values) => {
          if (err || !values.username || !values.password) {
              return
          }
          dispatch(loginActions.loginRequest(values, {
              resolve:(user) => {
                cookie.save("user", user.username)
                history.push("/music")
              },
              reject:() => {
                  notification.error({
                      "message":"登录失败"
                  })
              }
          }))
          
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="wwj-login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                     <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                            )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Login = Form.create()(LoginForm);
function mapStateToProps({ login:{currentUser}}) {
    return {
        currentUser,
    }
}
export default connect(mapStateToProps)(Login)