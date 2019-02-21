import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/view/SurpriseView';
import Surprise from '../../components/Surprise/Surprise.jsx';

export let SurpriseViewRef;
class SurpriseView extends React.Component {
    constructor(props) {
        super(props);
        SurpriseViewRef = this;
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
                <Surprise />
            </div>
        );
    }
}
export default withRouter(SurpriseView);
