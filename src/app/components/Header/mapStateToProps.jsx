
const mapStateToProps = (state) => {
    return {
        username: state.username,
        mobile: state.mobile,
        language_type: state.language_type,

    };
};

export default mapStateToProps;