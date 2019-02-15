import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from '../../control/components/Header';

export let HeaderRef;
class Header extends React.Component {
    constructor(props) {
        super(props);
        HeaderRef = this;
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    setUsername = (username) => {
        this.props.setUsername(username);
    }
    interfaceError = (msg) => {
        alert(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        alert(`网络错误${code}`);
    }
    render() {
        const language_type = this.props.language_type;
        console.log(language_type);
        return (
            <div style={{ backgroundColor: 'red' }}>
                <div>Header</div>
                <div>username:{this.props.username}</div>
                <div>mobile:{this.props.mobile}</div>
                <div><button onClick={() => this.props.setUsername('Header')}>设置username为Header</button></div>
                <div><button onClick={() => this.props.setMobile('789789')}>设置mobile为789789</button></div>
                <div><button onClick={() => Control.getUsername()}>从服务器获取user并写入</button></div>
                <div><button onClick={() => this.props.setLanguage_type(language_type=='en_us'?'zh_cn':'en_us')}>设置antd全局语言</button></div>
            </div>
        );
    }
}
export default withRouter(Header);
