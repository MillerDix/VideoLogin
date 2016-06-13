import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Video from 'react-native-video';

class SpotifyLogin extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Video source={{uri: "moments"}} style={styles.video} repeat={true} resizeMode="cover" key="video2" />
                <Text style={styles.text}>Nice</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    backgroundOverlay: {
        opacity: 0.5,
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontWeight: '400',
    }
});

AppRegistry.registerComponent('SpotifyLogin', () => SpotifyLogin);
