import Index_cmpt  from './Index_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Index_cmpt.propTypes = {
    username:PropTypes.string.isRequired,

};
const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index_cmpt);
export default Index;