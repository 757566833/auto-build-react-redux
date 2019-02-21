import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import Control from '../../control/components/Index';

export let IndexRef;
class Index extends React.Component {
    constructor(props) {
        super(props);
        IndexRef = this;
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
        const username = this.props.username;
        return (
            <div className='Index'>
                hello <Link to="/SurpriseView" >{username}</Link >
            </div>
        );
    }
}
export default withRouter(Index);
