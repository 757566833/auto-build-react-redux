import User_cmpt  from './User_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

User_cmpt.propTypes = {
    username:PropTypes.string.isRequired,
    setUsername:PropTypes.func.isRequired,

};
const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(User_cmpt);
export default User;