import { connect } from 'react-redux';
import {receiveTeam} from '../../actions/team_actions';
import {logoutUser} from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    shifts: state.shifts,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  receiveTeam: team => dispatch(receiveTeam(team)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
