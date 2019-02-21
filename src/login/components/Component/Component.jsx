import Component_cmpt  from './Component_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Component_cmpt.propTypes = {

};
const Component = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component_cmpt);
export default Component;