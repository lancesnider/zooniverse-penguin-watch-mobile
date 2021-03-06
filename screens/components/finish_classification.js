import React from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Animated, Easing } from 'react-native'
import { CheckBox } from 'react-native-elements'
import DoneButton from './done_button'

export default class FinishClassification extends React.Component {
  state = {
    menuTransform: new Animated.ValueXY({x: 0, y: 210})
  }

  componentDidMount () {
    Animated.timing(
      this.state.menuTransform, {
        toValue: {
          x: 0,
          y: 0
        },
        duration: 350,
        easing: Easing.out(Easing.back()),
        useNativeDriver: true
      }
    ).start()
  }

  render() {
    let { menuTransform } = this.state
    return (
      <Animated.View
        style={{
          transform: this.state.menuTransform.getTranslateTransform(),
          width: '100%',
          height: 210,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0
        }}
      >
        <TouchableHighlight
          onPress={this.props.onBack}
          style={{
            paddingTop: 16
          }}
          underlayColor='white'
        >
          <Text style={{
            fontSize: 18,
            color: 'blue',
            textAlign: 'center',
            textDecorationLine: 'underline'
          }}>
            Back
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.onDone}
          style={{
            padding: 16
          }}
          underlayColor='white'
        >
          <Text style={{
            fontSize: 16,
            color: 'red',
            textAlign: 'center',
            textDecorationLine: 'underline'
          }}>
            The image is too dark or blurry
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.onDone}
          style={{
            paddingBottom: 16
          }}
          underlayColor='white'
        >
          <Text style={{
            fontSize: 16,
            color: 'red',
            textAlign: 'center',
            textDecorationLine: 'underline'
          }}>
            There were too many to count
          </Text>
        </TouchableHighlight>

        <DoneButton
          onPress={this.props.onDone}
          color='green'
        >
          I've marked all the animals
        </DoneButton>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
})
