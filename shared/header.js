import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            {/* icon*/}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTilte}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 20,
        letterSpacing: 1,
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    headerTilte: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },

});
