import React from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';
import { styles } from './styles';
import { Controller } from 'react-hook-form';

export function Input({ control, name, errors, ...rest }) {
  
    return (
        <View style={styles.container}>
            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange, ref, onBlur } }) => (
                    <TextInput
                        ref={ref}
                        onBlur={onBlur}
                        style={styles.textInput}
                        value={value}
                        onChangeText={onChange}
                        {...rest}
                    />
                )}
            />
            <Text
                style={styles.error}
            >
                {errors}
            </Text>
        </View>
    );
}