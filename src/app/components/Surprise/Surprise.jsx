import Surprise_cmpt  from './Surprise_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Surprise_cmpt.propTypes = {
    username:PropTypes.string.isRequired,

};
const Surprise = connect(
    mapStateToProps,
    mapDispatchToProps
)(Surprise_cmpt);
export default Surprise;