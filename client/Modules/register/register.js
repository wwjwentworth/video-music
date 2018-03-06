import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import * as registerActions from './register.action'
import './register.less'
const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;
class RegistrationForm extends Component {
    handleSubmit = (e) => {
        const {dispatch} = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err || !values.username || !values.password || !values.email) {
                return;
            }
            console.log(values)
            dispatch(registerActions.register(values))
            
        });
        
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
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
                            <Input />
                            )}
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
                    <FormItem
                        wrapperCol={{ span: 12, offset: 5 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Register = Form.create()(RegistrationForm);

export default connect()(Register)