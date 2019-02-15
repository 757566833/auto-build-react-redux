import SearchHeader_cmpt  from './SearchHeader_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

SearchHeader_cmpt.propTypes = {

};
const SearchHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchHeader_cmpt);
export default SearchHeader;