import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { Controller } from 'react-hook-form';

export function CepInput({ name, control, errors, useGetCepDetails, cepValue, setValue, setIsCepLoading, setIsCepError, ...rest }) {
    return (
        <View style={styles.container}>
            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange, ref, onBlur } }) => (
                    <TextInput
                        ref={ref}
                        onBlur={() => {
                            useGetCepDetails(cepValue, setValue, setIsCepLoading, setIsCepError);
                            onBlur()
                        }}
                        {...rest}
                        style={styles.textInput}
                        value={value}
                        onChangeText={onChange}
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