import ArticleList_cmpt  from './ArticleList_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

ArticleList_cmpt.propTypes = {
    mobile:PropTypes.string.isRequired,
    setMobile:PropTypes.func.isRequired,

};
const ArticleList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleList_cmpt);
export default ArticleList;