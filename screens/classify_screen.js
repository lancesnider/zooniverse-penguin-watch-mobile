import React, {Component} from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import NavigationMenu from './components/navigation_menu'
import ClassificationImage from './components/classification_image'
import SaveButtons from './components/save_buttons'
import ClassifierButtons from './components/classifier_buttons'

export default class ClassifyScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classifications: [],
      currentClassificationType: 'adult',
      classificationTypeCount: {
        adult: 0,
        chick: 0,
        egg: 0,
        other: 0
      }
    }
  }

  handleDone = (tooManyToCount) => console.log(`Done - Too many to count: ${tooManyToCount}`)

  handleStateUpdate = (newState) => this.setState(newState)

  render() {
    const {navigate} = this.props.navigation

    return (
      <View style={{
        flex: 1
      }}>
        <NavigationMenu navigate={navigate} />

        <ClassificationImage
          onClick={this.handleStateUpdate}
          classifications={this.state.classifications}
          currentClassificationType={this.state.currentClassificationType}
          classificationTypeCount={this.state.classificationTypeCount}
        />

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
              onPress={() => this.setState({
                classifications: [],
                classificationTypeCount: {
                  adult: 0,
                  chick: 0,
                  egg: 0,
                  other: 0
                }
              })}
              underlayColor='white'
            >
              <Text style={styles.redButtons}>
                clear all marks
              </Text>
            </TouchableHighlight>
          </View>

          <ClassifierButtons
            classificationTypeCount={this.state.classificationTypeCount}
            onClick={this.handleStateUpdate}
            currentClassificationType={this.state.currentClassificationType}
          />

          <SaveButtons
            onPress={this.handleDone}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  redButtons: {
    color: 'red',
    padding: 16,
    textDecorationLine: 'underline'
  }
})
