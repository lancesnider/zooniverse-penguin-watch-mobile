import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ClassifyScreen from './screens/classify_screen'
import TutorialScreen from './screens/tutorial_screen'
import TalkScreen from './screens/talk_screen'
import FieldGuideScreen from './screens/field_guide_screen'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Remote debugger'])

const AppNavigator = createStackNavigator({
  Home: {
    screen: ClassifyScreen
  },
  Tutorial: {
    screen: TutorialScreen
  },
  FieldGuide: {
    screen: FieldGuideScreen
  },
  Talk: {
    screen: TalkScreen
  }
});

export default createAppContainer(AppNavigator);