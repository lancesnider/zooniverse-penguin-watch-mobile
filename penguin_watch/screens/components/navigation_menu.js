import React from 'react'
import { View, Text, Button } from 'react-native'

export default class NavigationMenu extends React.Component {
  render() {

    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16
        }}
      >
        <Text>Logo</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Button
            title='Classify'
            onPress={() => this.props.navigate('Home')}
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
