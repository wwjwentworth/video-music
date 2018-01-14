import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './Register.less'
import {fetchRegister} from '../../actions/registerAction'
const FormItem = Form.Item
class Register extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch, register} = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                dispatch(fetchRegister(values))
            }
        })
    }
    success = () =>{
        message.success('注册成功，正在跳转首页');
        // window.location.href = "http://localhost:8080/"
    }
    render() {
        const {title_img,isFetching,data} = this.props
        const { getFieldDecorator } = this.props.form;
        if(data === 'done') {
            this.success()
        }
        return (
            <div className="wwj-register">
               <Form onSubmit={this.handleSubmit.bind(this)}
                    className="login-form">
                    <FormItem className="form-title">
                        <img src={title_img} alt=""/>
                        <span>好时光</span>
                    </FormItem>
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
                            getFieldDecorator('emial', {
                                rules:[{
                                    required:true,
                                    pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                    message:'please input your password',
                                    
                                }]
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Password" />
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
                        <Button htmlType="submit"
                            className="form-btn">注册</Button>
                        <Link to="/login" className="login">已有账号，立即登录</Link>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const register = state.register
    return {
        title_img: register.title_img,
        isFetching:register.isFetching,
        data:register.data
    }
}
const NormalRegister = Form.create()(Register)
export default connect(mapStateToProps)(NormalRegister)