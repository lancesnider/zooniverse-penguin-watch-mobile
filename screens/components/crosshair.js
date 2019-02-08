import React from 'react'
import { View } from 'react-native'
import {animalTypeColors} from '../constants/animal_type_constants'

export default class Crosshair extends React.Component {
  render() {
    const classification = this.props.classification
    return (
      <View
        style={{
          left: classification.x,
          top: classification.y
        }}
      >
        <View
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            top: -20,
            left: -20,
            borderWidth: 3,
            borderColor: animalTypeColors[classification.type],
            borderRadius: 20
          }}
        />
      </View>
    )
  }
}
