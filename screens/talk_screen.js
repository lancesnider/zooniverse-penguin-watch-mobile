import React from 'react'
import { View, Text, Image, Dimensions, TextInput, TouchableHighlight } from 'react-native'
import classifyImage01 from './images/classify01.jpg'

const imageWidth = 1000
const imageHeight = 562
const windowWidth = Dimensions.get('window').width

export default class TalkScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{width: windowWidth, height: windowWidth / imageWidth * imageHeight}}
          source={classifyImage01}
        />
        <View style={{padding: 20}}>
          <Text>Talk about this image</Text>
          <TextInput
            style={{
              height: 250,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 5,
              marginVertical: 12
            }}
            multiline={true}
          />
          <TouchableHighlight
            onPress={() => console.log('save')}
            underlayColor='blue'
            style={{
              backgroundColor: 'blue',
              padding: 10,
              marginBottom: 10
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white'
              }}
            >
              Post comment
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
