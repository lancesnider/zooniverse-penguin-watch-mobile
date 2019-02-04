import React from 'react'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class TalkAfter extends React.Component {
  render() {
    return (
      <View
        style={{
          paddingHorizontal: 5
        }}
      >
        <CheckBox
          title='Talk after you click done'
          checked={this.props.checked}
          onPress={this.props.onPress}
        />
      </View>
    )
  }
}
