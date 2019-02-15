import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/Content';

export let ContentRef;
class Content extends React.Component {
    constructor(props) {
        super(props);
        ContentRef = this;
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
            <div className='Content'>
                Content
            </div>
        );
    }
}
export default withRouter(Content);
