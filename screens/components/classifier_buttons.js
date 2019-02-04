import React from 'react'
import { View } from 'react-native'
import ClassifierButton from './classifier_button'

const animalTypes = [
  'adult',
  'chick',
  'egg',
  'other'
]

export default class ClassifierButtons extends React.Component {
  handleClassifierButtonClick = (animalType) => {
    this.props.onClick({
      currentClassificationType: animalType
    })
  }

  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 14
        }}
      >
        {
          animalTypes.map((animalType) => (
            <ClassifierButton
              key={animalType}
              active={animalType === this.props.currentClassificationType}
              onClick={() => this.handleClassifierButtonClick(animalType)}
              animalType={animalType}
              count={this.props.classificationTypeCount[animalType]}
            />
          ))
        }
      </View>
    )
  }
}
