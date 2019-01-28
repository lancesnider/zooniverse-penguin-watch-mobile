import React, {Component} from 'react'
import { View, Text, TouchableHighlight, StyleSheet, Image, Dimensions } from 'react-native'
import NavigationMenu from './components/navigation_menu'
import { CheckBox } from 'react-native-elements'
import ImageZoom from 'react-native-image-pan-zoom'
import classifyImage01 from './images/classify01.jpg'
import Crosshair from './components/crosshair'
import generateUUID from 'uuid/v4'

export default class ClassifyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talkAfter: false,
      classifications: []
    }
  }

  handleImageClick = (e) => {

    const newClassification = {
      id: generateUUID(),
      type: 'adult',
      x: e.locationX,
      y: e.locationY
    }

    this.setState(prevState => ({
      classifications: [...prevState.classifications, newClassification]
    }))
  }

  render() {
    const {navigate} = this.props.navigation
    const imageWidth = 1000
    const imageHeight = 562
    const windowWidth = Dimensions.get('window').width
    const minScale = windowWidth/1000

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
          <ImageZoom
            cropWidth={windowWidth}
            cropHeight={260}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            minScale={minScale}
            enableCenterFocus={false}
            centerOn={{x: 0, y: 0, scale: minScale}}
            onClick={(e) => this.handleImageClick(e)}
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
                  this.state.classifications.map((classification) => (
                    <Crosshair
                      key={classification.id}
                      xPos={classification.x}
                      yPos={classification.y}
                    />
                  ))
                }
              </View>
            </View>
          </ImageZoom>
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
              onPress={() => this.setState({classifications: []})}
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
