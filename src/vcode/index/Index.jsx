import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import store from '../redux/store.jsx';
import { Provider, connect } from 'react-redux';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { indexRouter } from '../../../config/routerConfig';
import IndexView from '../view/IndexView/IndexView.jsx';


class VcodeRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={IndexView} />
                <Route path='/IndexView' component={IndexView} />

                <Route path='/**' component={IndexView} />
            </Switch>
        );
    }
}
const VcodeRedux = 
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(VcodeRouter)
    );
const Vcode = () => <Provider store={store}>
    <BrowserRouter basename={indexRouter}>
        <VcodeRedux />
    </BrowserRouter>
</Provider>;
export default Vcode;
