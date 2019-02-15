import action from './action.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(action.setUsername(username)),
        setMobile: (mobile) => dispatch(action.setMobile(mobile)),
        setLanguage_type: (language_type) => dispatch(action.setLanguage_type(language_type)),

    };
};
export default mapDispatchToProps;