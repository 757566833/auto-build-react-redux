import action from './action.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(action.setUsername(username)),
        setMobile: (mobile) => dispatch(action.setMobile(mobile)),

    };
};
export default mapDispatchToProps;