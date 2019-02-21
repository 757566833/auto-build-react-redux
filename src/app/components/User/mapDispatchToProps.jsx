import action from './action.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(action.setUsername(username)),

    };
};
export default mapDispatchToProps;