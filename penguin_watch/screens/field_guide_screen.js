import React from 'react'
import { View, Text } from 'react-native'
import NavigationMenu from './components/navigation_menu'

export default class FieldGuideScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={{ flex: 1}}>
        <NavigationMenu navigate={navigate} />
        <Text>Field guide (to do)</Text>
      </View>
    )
  }
}
