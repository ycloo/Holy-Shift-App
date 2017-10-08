import { connect } from 'react-redux';
import {receiveTeam} from '../../actions/team_actions';
import ShiftDetail from './shift_detail';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    teams: state.teams,
    shifts: state.shifts
  };
};

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps)(ShiftDetail);
