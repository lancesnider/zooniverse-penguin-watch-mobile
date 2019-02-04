import React, {Component} from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import NavigationMenu from './components/navigation_menu'
import TalkAfter from './components/talk_after'
import ClassificationImage from './components/classification_image'
import SaveButtons from './components/save_buttons'
import ClassifierButtons from './components/classifier_buttons'
import generateUUID from 'uuid/v4'

export default class ClassifyScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talkAfter: false,
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

  handleImageClick = (e) => {
    const newClassification = {
      id: generateUUID(),
      type: this.state.currentClassificationType,
      x: e.locationX,
      y: e.locationY
    }

    this.setState(prevState => ({
      classifications: [...prevState.classifications, newClassification],
      classificationTypeCount: {
        ...prevState.classificationTypeCount,
        [prevState.currentClassificationType]: prevState.classificationTypeCount[prevState.currentClassificationType] + 1
      }
    }))
  }

  handleClassifierButtonClick = (animalType) => {
    this.setState({
      currentClassificationType: animalType
    })
  }

  handleTalkAfterPress = () => this.setState({
    talkAfter: !this.state.talkAfter
  })

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
          onClick={this.handleImageClick}
          classifications={this.state.classifications}
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
            onClick={this.handleClassifierButtonClick}
            currentClassificationType={this.state.currentClassificationType}
          />

          <TalkAfter
            checked={this.state.talkAfter}
            onPress={this.handleTalkAfterPress}
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
