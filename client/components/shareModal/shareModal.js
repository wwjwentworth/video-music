import React, { Component } from 'react'
import { Modal, Input, Button } from 'antd'

import './shareModal.less'
const {TextArea} = Input
class ShareModal extends Component {
    render() {
        return (
            <div className="wwj-share-modal">
                <Modal
                    title="Vertically centered modal dialog"
                    wrapClassName="vertical-center-modal"
                    visible={this.props.visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    <TextArea placeholder="分享你的心情"
                        autosize={{ minRows: 4, maxRows: 8 }} />
                    <Button className="share-btn">分享</Button>
                </Modal>
            </div>
        )
    }
}

export default ShareModal