import React from 'react';
// import Control from '../../control/view/SearchView';
import SearchHeader from '../../components/SearchHeader/SearchHeader.jsx';
import ArticleList from '../../components/ArticleList/ArticleList.jsx';

export let SearchViewRef;
export default class SearchView extends React.Component{
    constructor(props){
        super(props);
        SearchViewRef = this;
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
                <SearchHeader />
                <ArticleList />
            </div>
        );
    }
}
