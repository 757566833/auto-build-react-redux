import SurpriseView_cmpt  from './SurpriseView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

SurpriseView_cmpt.propTypes = {

};
const SurpriseView = connect(
    mapStateToProps,
    mapDispatchToProps
)(SurpriseView_cmpt);
export default SurpriseView;