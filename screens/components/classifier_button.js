import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import {animalTypeColors} from '../constants/animal_type_constants'

export default class ClassifierButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={{
          ...styles.classifierButtons,
          borderColor: this.props.active
            ? animalTypeColors[this.props.animalType]
            : 'gray'
        }}
        onPress={() => this.props.onClick(this.props.animalType)}
        underlayColor='white'
      >
        <View style={styles.classifierButtonsTextContainer}>
          <Text style={styles.classifierButtonsText}>
            {this.props.animalType} ({this.props.count})
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  classifierButtons: {
    flex: 1,
    height: 80,
    margin: 2,
    justifyContent: 'flex-end',
    borderWidth: 3,
    backgroundColor: 'gray'
  },
  classifierButtonsTextContainer: {
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  classifierButtonsText: {
    color: 'white',
    fontSize: 12
  }
})

