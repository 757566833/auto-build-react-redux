import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/SearchHeader';

export let SearchHeaderRef;
class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        SearchHeaderRef = this;
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
            <div className='SearchHeader'>
                SearchHeader
            </div>
        );
    }
}
export default withRouter(SearchHeader);
