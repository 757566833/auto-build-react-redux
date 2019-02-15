import React from 'react';
// import Control from '../../control/view/AdminView';
import ArticleList from '../../components/ArticleList/ArticleList.jsx';

export let AdminViewRef;
export default class AdminView extends React.Component{
    constructor(props){
        super(props);
        AdminViewRef = this;
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
    render(){
        return(
            <div>
                <ArticleList/>
            </div>
        );
    }
}
