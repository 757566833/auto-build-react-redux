import Footer_cmpt  from './Footer_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Footer_cmpt.propTypes = {
    mobile:PropTypes.string.isRequired,
    setMobile:PropTypes.func.isRequired,

};
const Footer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer_cmpt);
export default Footer;