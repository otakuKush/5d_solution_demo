import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NetInfo from "@react-native-community/netinfo";

export class CheckConnectivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionObj: ''
        }
    }

    componentDidMount() {
        this.subscribeNetInfo();
    }

    //FUNCTION DEFINED TO GET THE INTERNET CONNECTIVITY INFORMATION
    // getNetInfo = (params) => {
    //     NetInfo.fetch().then(state => {
    //         console.log("Connection type", state);
    //         console.log("Is connected?", state.isConnected);

    //         this.setState({
    //             connectionObj: state
    //         });
    //     });
    // }

    //FUNCTION DEFINED TO SUBSCRIBE TO INTERNET CONNECTIVITY
    subscribeNetInfo = () => {
        NetInfo.addEventListener(state => {

            this.setState({
                connectionObj: state
            });

        });
    }

    render() {
        return (
            <View style={this.state.connectionObj.isConnected ? null : styles.offlineMainContainer}>
                <View style={this.state.connectionObj.isConnected ? null : styles.offlineMsgContainer}>
                    {!this.state.connectionObj.isConnected &&
                        <Text>You are offline</Text>
                    }
                </View>
            </View>
        )
    }
}

export default CheckConnectivity

const styles = StyleSheet.create({
    offlineMainContainer: {
        position: "absolute",
        bottom: 20,
        width: '100%',
        alignItems: "center"
    },
    offlineMsgContainer: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        width: '80%',
        alignItems: "center",
    }
})