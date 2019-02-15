import Menus_cmpt  from './Menus_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Menus_cmpt.propTypes = {
    username:PropTypes.string.isRequired,
    setUsername:PropTypes.func.isRequired,

};
const Menus = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menus_cmpt);
export default Menus;