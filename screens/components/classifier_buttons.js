import React from 'react'
import { View } from 'react-native'
import ClassifierButton from './classifier_button'
import adultImage from '../images/adult.jpg'
import chickImage from '../images/chick.jpg'
import eggImage from '../images/egg.jpg'
import otherImage from '../images/other.jpg'

const animalTypes = [
  'adult',
  'chick',
  'egg',
  'other'
]

const animalImages = {
  adult: adultImage,
  chick: chickImage,
  egg: eggImage,
  other: otherImage,
}

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
              animalImage={animalImages[animalType]}
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
