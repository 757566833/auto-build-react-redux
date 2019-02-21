import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/view/IndexView';
import Component from '../../components/Component/Component.jsx';

export let IndexViewRef;
class IndexView extends React.Component {
    constructor(props) {
        super(props);
        IndexViewRef = this;
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
            <div>
                <Component />
            </div>
        );
    }
}
export default withRouter(IndexView);
