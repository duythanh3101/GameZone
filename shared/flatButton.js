import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FlatButton({ text, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.flatButtonStyle}>
                <Text style={styles.titleStyle}>{ text }</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    flatButtonStyle: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#F01D71',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})