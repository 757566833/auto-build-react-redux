import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../redux/store.jsx';
import { Provider, connect } from 'react-redux';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
// import { connect } from 'react-redux';
import { indexRouter } from '../../../config/routerConfig';
import IndexView from '../view/IndexView/IndexView.jsx';
import SearchView from '../view/SearchView/SearchView.jsx';
import AdminView from '../view/AdminView/AdminView.jsx';


import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-au';

moment.locale('zh-cn');

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        console.log(this.props);
    }
    shouldComponentUpdate = (nextProps) => {
        if (this.props.language_type != nextProps.language_type) {
            switch (nextProps.language_type) {
                case 'zh_cn':
                    moment.locale('zh-cn');
                    break;
                case 'en_us':
                    moment.locale('en-au');
                    break;
                default:
                    break;
            }
        }
        return true;
    }
    render() {
        const languageJson = {
            'zh_cn': zh_CN,
            'en_us': en_US,
        };
        const language_type =this.props.language_type;
        return (
            <LocaleProvider locale={languageJson[language_type]}>
                <Switch>
                    <Route exact path='/' component={IndexView} />
                    <Route path='/IndexView' component={IndexView} />
                    <Route path='/SearchView' component={SearchView} />
                    <Route path='/AdminView' component={AdminView} />
                    <Route path='/**' component={IndexView} />
                </Switch>
            </LocaleProvider>
        );
    }
}
const AppRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppRouter);
const App = () => <Provider store={store}>
    <BrowserRouter basename={indexRouter}>
        <AppRedux />
    </BrowserRouter>
</Provider>;
export default App;
//路由自己写，未必每个组件都是分页
