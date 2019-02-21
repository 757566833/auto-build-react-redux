import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/Surprise';

export let SurpriseRef;
class Surprise extends React.Component {
    constructor(props) {
        super(props);
        SurpriseRef = this;
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
            <div className='Surprise'>
                {username}
                <br />
                Surprise
            </div>
        );
    }
}
export default withRouter(Surprise);
