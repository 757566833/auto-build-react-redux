import Content_cmpt  from './Content_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Content_cmpt.propTypes = {
    username:PropTypes.string.isRequired,
    setUsername:PropTypes.func.isRequired,

};
const Content = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content_cmpt);
export default Content;