import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }){

    const pressHandler = () => {
        navigation.goBack();
    }
    
    const rating = navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone rating: </Text>
                    <Image source={images.rating[rating]}/>
                </View>
            </Card>
            
        </View>
    );
    
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        borderTopColor: 'red',
        borderTopWidth: 1,
        justifyContent: 'center',
        marginTop: 10
    }
})
