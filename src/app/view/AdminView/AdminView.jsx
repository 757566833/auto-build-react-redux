import AdminView_cmpt  from './AdminView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

AdminView_cmpt.propTypes = {

};
const AdminView = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminView_cmpt);
export default AdminView;