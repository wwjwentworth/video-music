import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import * as registerActions from './register.action'
import './register.less'
const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;
class RegistrationForm extends Component {
    handleSubmit = (e) => {
        const { dispatch, history } = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err || !values.username || !values.password || !values.email) {
                return;
            }
            dispatch(registerActions.register(values))
            history.push('/login')
        });

    }
    returnToLogin = () => {
        const {history} = this.props
        history.push('/login')
    }
    handleChange = (e) => {
        const {dispatch} = this.props
        dispatch(registerActions.isRepeatName({username:e.target.value}))
    }
    render() {
        const { form:{getFieldDecorator}, register:{isRepeatName} } = this.props;
        return (
            <div className="wwj-register">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="Username">
                        {getFieldDecorator('username', {
                            rules: [{
                                required: true,
                                message: 'Please input your E-mail!',
                            }, {
                                pattern: /^[a-zA-Z0-9_-]{6,16}$/,
                                message: "请输入6-16个有效字符！"
                            }],
                        })(
                            <Input onBlur={(e) => this.handleChange(e)}/>
                            
                            )}
                            {
                                isRepeatName ?
                                <p className="warn">111</p>:null
                            }
                            
                    </FormItem>
                    <FormItem label="Password">
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your E-mail!',
                            }, {
                                pattern: /^[a-zA-Z0-9_-]{6,16}$/,
                                message: "请输入6-16个有效字符！"
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [{
                                required: true, message: 'Please input your E-mail!',
                            }, {
                                type: 'email', message: '这不是一个有效的邮箱！',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit"
                            disabled={isRepeatName} >
                            注册
                        </Button>
                        <a className="login" onClick={this.returnToLogin}>已有账号，登录</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Register = Form.create()(RegistrationForm);
function mapStateToProps({ register, header }) {
    return {
        register,
        header
    }
}
export default connect(mapStateToProps)(Register)