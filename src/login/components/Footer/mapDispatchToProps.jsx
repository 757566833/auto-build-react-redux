import action from './action.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        setMobile: (mobile) => dispatch(action.setMobile(mobile)),

    };
};
export default mapDispatchToProps;