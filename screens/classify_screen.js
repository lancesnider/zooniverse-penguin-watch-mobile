import React, {Component} from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
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
          <TouchableHighlight
            onPress={() => this.setState({
              classifications: [],
              classificationTypeCount: emptyClassifications
            })}
            style={{
              width: 130
            }}
            underlayColor='white'
          >
            <Text style={styles.redButtons}>
              clear all marks
            </Text>
          </TouchableHighlight>

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
    paddingLeft: 16,
    textDecorationLine: 'underline'
  }
})
