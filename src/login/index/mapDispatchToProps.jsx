import action from './action.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage_type: (language_type) => dispatch(action.setLanguage_type(language_type)),

    };
};
export default mapDispatchToProps;