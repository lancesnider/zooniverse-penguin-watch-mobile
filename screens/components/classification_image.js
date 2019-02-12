import React from 'react'
import { View, Dimensions, Image } from 'react-native'
import classifyImage01 from '../images/classify01.jpg'
import ImageZoom from 'react-native-image-pan-zoom'
import Crosshair from './crosshair'
import generateUUID from 'uuid/v4'

export default class ClassificationImage extends React.Component {

  handleImageClick = (e) => {
    // Don't allow classifications from the verification screen
    if (this.props.finishClassificationScreen) return

    const currentClassificationType = this.props.currentClassificationType
    const classificationTypeCount = this.props.classificationTypeCount

    const newClassification = {
      id: generateUUID(),
      type: currentClassificationType,
      x: e.locationX,
      y: e.locationY
    }

    this.props.onClick({
      classifications: [...this.props.classifications, newClassification],
      classificationTypeCount: {
        ...classificationTypeCount,
        [currentClassificationType]: classificationTypeCount[currentClassificationType] + 1
      }
    })
  }

  render() {
    const imageWidth = 1000
    const imageHeight = 562
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height
    const minScale = windowWidth/1000

    // To get the crop height, we need to subtract the header
    // height (92) and menu height (210) from the window height.
    // To do: do this better
    const cropHeight = windowHeight - 98 - 210

    return (
      <View
        style={{
          backgroundColor: '#1a1a1a',
          flex: 1
        }}
      >
        <ImageZoom
          cropWidth={windowWidth}
          cropHeight={cropHeight}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          minScale={minScale}
          enableCenterFocus={false}
          centerOn={{x: 0, y: 0, scale: minScale}}
          onClick={(e) => this.handleImageClick(e)}
          // Waiting for double clicks made the regular clicks feel super slow
          doubleClickInterval={1}
        >
          <View>
            <Image
              source={classifyImage01}
            />

            <View
              style={{
                position: 'absolute',
                width: imageWidth,
                height: imageHeight
              }}
            >
              {
                this.props.classifications.map((classification) => (
                  <Crosshair
                    key={classification.id}
                    classification={classification}
                  />
                ))
              }
            </View>
          </View>
        </ImageZoom>
      </View>
    )
  }
}
