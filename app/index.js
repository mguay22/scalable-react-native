import React from 'react';
import {View} from 'react-native';
import {Navigation} from './utils/router';

const App = ({}) => (
  <View style={{flex: 1, flexDirection: 'column'}}>
    <Navigation />
  </View>
);

export {App};
