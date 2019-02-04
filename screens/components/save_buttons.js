import React from 'react'
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class SaveButtons extends React.Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 12,
          marginBottom: 24
        }}
      >
        <TouchableHighlight
          onPress={() => this.props.onPress(true)}
          underlayColor='white'
          style={{flex: 1}}
        >
          <View
            style={{
              ...styles.saveButtons,
              backgroundColor: 'blue',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text style={styles.saveButtonsText}>
              Done
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'white',
              width: 55
            }}>
              too many to count
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={{flex: 1}}
          onPress={() => this.props.onPress(false)}
          underlayColor='white'
        >
          <View style={{
              backgroundColor: 'green',
              ...styles.saveButtons
            }}
          >
            <Text style={styles.saveButtonsText}>
              Done
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  saveButtons: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveButtonsText: {
    color: 'white',
    fontSize: 24
  }
})
