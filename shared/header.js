import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            {/* icon*/}
            <MaterialIcons name='menu' size={28} onPress={openMenu}/>
            <View>
               <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 20,
        letterSpacing: 1,
        marginLeft: 10
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
