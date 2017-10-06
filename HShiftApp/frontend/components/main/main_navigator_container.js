import { connect } from 'react-redux';
import {receiveUser} from '../../actions/user_actions';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    organization: state.organization,
    shifts: state.shifts
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
