import SearchView_cmpt  from './SearchView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

SearchView_cmpt.propTypes = {

};
const SearchView = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchView_cmpt);
export default SearchView;