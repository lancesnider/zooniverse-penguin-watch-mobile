import React from 'react'
import { View, Animated, Easing, TouchableHighlight } from 'react-native'
import {animalTypeColors} from '../constants/animal_type_constants'

export default class Crosshair extends React.Component {
  state = {
    crosshairOpacity: new Animated.Value(0),
    crosshairScale: new Animated.Value(0)
  }

  componentDidMount () {
    Animated.parallel([
      Animated.timing(
        this.state.crosshairOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        this.state.crosshairScale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.in(Easing.back())
        }
      )
    ]).start()
  }

  render() {
    let { crosshairOpacity, crosshairScale } = this.state
    const classification = this.props.classification

    return (
      <TouchableHighlight
        onPress={() => console.log('crosshair')}
        underlayColor='white'
      >
        <Animated.View
          style={{
            left: classification.x,
            top: classification.y,
            opacity: crosshairOpacity
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
        </Animated.View>
      </TouchableHighlight>
    )
  }
}
