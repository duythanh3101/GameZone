import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props){

    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20
    }
})