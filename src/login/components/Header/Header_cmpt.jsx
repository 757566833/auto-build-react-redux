import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/Header';

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
    interfaceError = (msg) => {
        alert(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        alert(`网络错误${code}`);
    }
    render() {
        return (
            <div className='Header'>
                Header
            </div>
        );
    }
}
export default withRouter(Header);
