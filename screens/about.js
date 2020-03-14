import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from '../styles/global';

export default function About(){
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
        </View>
    );
    
}

const styles = StyleSheet.create({

    container: {
        padding: 24,
    }
});