import React from 'react';
import { useWatch } from 'react-hook-form';
import { Text, View } from 'react-native';

export function OtherComponent({ control }) {

    const password = useWatch({ control, name: 'password', defaultValue: '' });
    console.log(password);

    console.log('OtherComponent rendered');

    return (
        <View>
            <Text>OtherComponent</Text>
        </View>
    );
}