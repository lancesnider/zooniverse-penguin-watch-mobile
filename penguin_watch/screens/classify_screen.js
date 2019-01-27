import React from 'react'
import { View, Text, Button } from 'react-native'
import NavigationMenu from './components/navigation_menu'

export default class ClassifyScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    const {navigate} = this.props.navigation

    return (
      <View style={{
        flex: 1
      }}>
        <NavigationMenu navigate={navigate} />

        <View
          style={{
            backgroundColor: 'blue',
            flex: 1
          }}
        >
          <Text>Image</Text>
        </View>

        <View
          style={{
            backgroundColor: 'green'
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text>Image is too dark or blurry</Text>
            <Text>clear all marks</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text>Classifier buttons</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text>Save buttons</Text>
          </View>
        </View>
      </View>
    )
  }
}
