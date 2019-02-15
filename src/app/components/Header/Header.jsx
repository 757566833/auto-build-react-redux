import Header_cmpt  from './Header_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Header_cmpt.propTypes = {
    username:PropTypes.string.isRequired,
    mobile:PropTypes.string.isRequired,
    language_type:PropTypes.string.isRequired,
    setUsername:PropTypes.func.isRequired,
    setMobile:PropTypes.func.isRequired,
    setLanguage_type:PropTypes.func.isRequired,

};
const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header_cmpt);
export default Header;