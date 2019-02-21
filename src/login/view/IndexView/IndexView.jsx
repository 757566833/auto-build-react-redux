import IndexView_cmpt  from './IndexView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

IndexView_cmpt.propTypes = {

};
const IndexView = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexView_cmpt);
export default IndexView;