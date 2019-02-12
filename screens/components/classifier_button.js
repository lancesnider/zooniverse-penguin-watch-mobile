import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native'
import { animalTypeColors } from '../constants/animal_type_constants'

export default class ClassifierButton extends React.Component {
  render () {
    console.log(this.props.animalImage)
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
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            height: '100%'
          }}
        >
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover'
            }}
            source={this.props.animalImage}
          />
          <View style={styles.classifierButtonsTextContainer}>
            <Text style={styles.classifierButtonsText}>
              {this.props.animalType} ({this.props.count})
            </Text>
          </View>
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
    borderWidth: 3
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
