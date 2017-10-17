import {connect} from 'react-redux';
import Agenda from './agenda';
import {logoutUser} from '../../actions/session_actions';

// const mapStateToProps = state => ({
//
// })

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(Agenda);
