import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number  1-5', (val) => {
            return parseInt(val) > 0 && parseInt(val) < 6;
        })
});

export default function ReviewForm({ addReview }){

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={ {title: '', body: '', rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={ (values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        
                        <Button title='Submit' color='red' onPress={props.handleSubmit}/>
                    </View>
                )
                }
            </Formik>
        </View>
    );
}