import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import CheckConnectivity from './CheckConnectivity'

export class StartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageObject: '',
        }
    }

    //FUNCTION TO SHOW THE IMAGE PICKER WITH CROPPING
    showImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            // console.log(image);
            this.setState({
                imageObject: image
            });
        }).catch(err => console.log('Image picker', err))
    }

    //FUNCTION TO SHOW THE CAMERA WITH CROPPING
    showImageCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            // console.log(image);
            this.setState({
                imageObject: image
            });
        }).catch(err => console.log('Image picker', err))
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {(this.state.imageObject.data != undefined && this.state.imageObject.data != "") &&
                    <Image style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'contain',
                        marginBottom: 20
                    }}
                        source={{ uri: 'data:' + this.state.imageObject.mime + ';base64,' + this.state.imageObject.data }} />
                }

                <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "bold" }}>Pick your avatar</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%' }}>
                    <TouchableOpacity style={{ backgroundColor: '#0057D9', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20 }} onPress={() => this.showImagePicker()}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>Pick Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#0057D9', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20 }} onPress={() => this.showImageCamera()}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>Click Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#0057D9', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20 }} onPress={() => this.setState({ imageObject: '' })}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>Remove</Text>
                    </TouchableOpacity>
                </View>

                <CheckConnectivity />
            </View>
        )
    }
}

export default StartScreen
