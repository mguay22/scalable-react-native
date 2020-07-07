import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../models/user/actions';

const mapStateToProps = (state, props) => {
  const {id, name, email} = state.user;

  return {id, name, email};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

const HomeView = ({id, name, email, getAllUserInfo, navigation}) => {
  useEffect(() => {
    getAllUserInfo();
  }, [getAllUserInfo]);

  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);

export {Home};
