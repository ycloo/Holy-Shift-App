import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

export default connect(mapStateToProps, null)(UserProfile);
