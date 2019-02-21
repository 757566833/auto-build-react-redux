import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from '../../control/components/Component';

export let ComponentRef;
class Component extends React.Component {
    constructor(props) {
        super(props);
        ComponentRef = this;
        this.isMount = true;
    }
    componentDidMount = () => {
        Control.demo();
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
            <div className='Component'>
                Component
            </div>
        );
    }
}
export default withRouter(Component);
