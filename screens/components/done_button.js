import React from 'react'
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class DoneButton extends React.Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 12
        }}
      >
        <TouchableHighlight
          style={{flex: 1}}
          onPress={() => this.props.onPress(false)}
          underlayColor='white'
        >
          <View style={{
              backgroundColor: this.props.color,
              ...styles.saveButtons
            }}
          >
            <Text style={styles.saveButtonsText}>
              {this.props.children}
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
