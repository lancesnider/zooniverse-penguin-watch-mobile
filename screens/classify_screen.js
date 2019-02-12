import React, {Component} from 'react'
import { View, Text, TouchableHighlight, StyleSheet, asdf } from 'react-native'
import NavigationMenu from './components/navigation_menu'
import ClassificationImage from './components/classification_image'
import DoneButton from './components/done_button'
import ClassifierButtons from './components/classifier_buttons'
import FinishClassification from './components/finish_classification'

const emptyClassifications = {
  adult: 0,
  chick: 0,
  egg: 0,
  other: 0
}

export default class ClassifyScreen extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {
      classifications: [],
      currentClassificationType: 'adult',
      classificationTypeCount: emptyClassifications,
      finishClassificationScreen: false
    }
  }

  handleUndo = () => {
    if (this.state.classifications.length === 0) return

    const lastClassificationType = this.state.classifications[this.state.classifications.length - 1].type
    const newCount = this.state.classificationTypeCount[lastClassificationType] - 1

    const newClassifications = this.state.classifications
    newClassifications.pop()

    this.setState({
      classifications: newClassifications,
      classificationTypeCount: {
        ...this.state.classificationTypeCount,
        [lastClassificationType]: newCount < 0 ? 0 : newCount
      }
    })
  }

  handleDone = () => this.setState({
    finishClassificationScreen: true
  })

  handleBack = () => this.setState({
    finishClassificationScreen: false
  })

  handleVerifyDone = () => this.setState({
    finishClassificationScreen: false,
    classifications: [],
    classificationTypeCount: emptyClassifications
  })

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
          finishClassificationScreen={this.state.finishClassificationScreen}
        />

        <View
          style={{
            backgroundColor: 'white',
            height: 210
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
              onPress={() => this.setState({
                classifications: [],
                classificationTypeCount: emptyClassifications
              })}
              underlayColor='white'
            >
              <Text style={styles.redButtons}>
                clear all marks
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.handleUndo}
              underlayColor='white'
            >
              <Text style={styles.redButtons}>
                undo
              </Text>
            </TouchableHighlight>
          </View>

          <ClassifierButtons
            classificationTypeCount={this.state.classificationTypeCount}
            onClick={this.handleStateUpdate}
            currentClassificationType={this.state.currentClassificationType}
          />

          <DoneButton
            onPress={this.handleDone}
            color='blue'
          >
            Done
          </DoneButton>
        </View>

        {
          this.state.finishClassificationScreen ? (
            <FinishClassification
              onDone={this.handleVerifyDone}
              onBack={this.handleBack}
            />
          ) : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  redButtons: {
    color: 'red',
    paddingVertical: 12,
    paddingHorizontal: 16,
    textDecorationLine: 'underline'
  }
})
