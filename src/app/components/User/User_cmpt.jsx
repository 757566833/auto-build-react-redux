import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/User';

export let UserRef;
class User extends React.Component {
    constructor(props) {
        super(props);
        UserRef = this;
        this.isMount = true;
    }
    state = {
        username: ''
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    setUsername = (e) => {
        this.props.setUsername(e.target.value);
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
            <div className='User'>
                <input value={username} onChange={this.setUsername} />
            </div>
        );
    }
}
export default withRouter(User);
