import React from 'react'
import { View } from 'react-native'

export default class Crosshair extends React.Component {
  render() {
    return (
      <View
        style={{
          left: this.props.xPos,
          top: this.props.yPos
        }}
      >
        <View
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            top: -20,
            left: -20,
            borderWidth: 4,
            borderColor: 'red',
            borderRadius: 20
          }}
        />
      </View>
    )
  }
}
