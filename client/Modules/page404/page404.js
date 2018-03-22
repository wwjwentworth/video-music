import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import './page404.less'
class Page404 extends Component {
    render() {
        return (
            <div className="wwj-page-404">
                <div className="bg-container">
                    <div className={'tip-404'}>
                        <h2>404</h2>
                        <div className="not-found-text">抱歉，您访问的页面不存在</div>
                    </div>
                </div>
                <div className="footer">
                    <Button className={'back-to-home'}
                        type={'primary'}
                        href={'/'}>
                        返回首页
                    </Button>
                </div>
            </div>
        )
    }
}

export default Page404