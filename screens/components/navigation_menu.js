import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import logo from '../images/logo.jpg'

export default class NavigationMenu extends React.Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 8,
          marginTop: 32,
          alignItems: 'center'
        }}
      >
        <Image
          source={logo}
          style={{
            width: 50,
            height: 50
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Button
            title='Talk'
            onPress={() => this.props.navigate('Talk')}
          />
          <Button
            title='Tutorial'
            onPress={() => this.props.navigate('Tutorial')}
          />
          <Button
            title='Field guide'
            onPress={() => this.props.navigate('FieldGuide')}
          />
        </View>
      </View>
    )
  }
}
