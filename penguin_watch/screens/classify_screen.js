import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import NavigationMenu from './components/navigation_menu'
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
  redButtons: {
    color: 'red',
    padding: 16,
    textDecorationLine: 'underline'
  },
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
  },
  classifierButtons: {
    flex: 1,
    height: 80,
    backgroundColor: 'gray',
    margin: 2,
    justifyContent: 'flex-end',
    borderWidth: 2,
    borderColor: 'gray'
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

export default class ClassifyScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    const {navigate} = this.props.navigation

    return (
      <View style={{
        flex: 1
      }}>
        <NavigationMenu navigate={navigate} />

        <View
          style={{
            backgroundColor: '#1a1a1a',
            flex: 1
          }}
        >
          <Text>Image</Text>
        </View>

        <View
          style={{
            backgroundColor: 'white'
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableHighlight
              onPress={() => console.log('clear')}
              underlayColor='white'
            >
              <Text style={styles.redButtons}>
                Image is too dark or blurry
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log('clear')}
              underlayColor='white'
            >
              <Text style={styles.redButtons}>
                clear all marks
              </Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 14
            }}
          >
            <TouchableHighlight style={styles.classifierButtons}>
              <View style={styles.classifierButtonsTextContainer}>
                <Text style={styles.classifierButtonsText}>Adults (2)</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.classifierButtons}>
              <View style={styles.classifierButtonsTextContainer}>
                <Text style={styles.classifierButtonsText}>Chicks</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.classifierButtons}>
              <View style={styles.classifierButtonsTextContainer}>
                <Text style={styles.classifierButtonsText}>Eggs</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.classifierButtons}>
              <View style={styles.classifierButtonsTextContainer}>
                <Text style={styles.classifierButtonsText}>Other</Text>
              </View>
            </TouchableHighlight>
          </View>


          <View
            style={{
              paddingHorizontal: 5
            }}
          >
            <CheckBox
              title='Talk after you click done'
              checked={false}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 12,
              marginBottom: 24
            }}
          >
            <TouchableHighlight
              onPress={() => console.log('clear')}
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
              onPress={() => console.log('clear')}
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
        </View>
      </View>
    )
  }
}
