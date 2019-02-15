import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/Footer';

export let FooterRef;
class Footer extends React.Component {
    constructor(props) {
        super(props);
        FooterRef = this;
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
            <div className='Footer'>
                Footer
            </div>
        );
    }
}
export default withRouter(Footer);
