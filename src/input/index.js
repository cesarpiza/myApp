import React, { useState } from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';
import { styles } from './styles';
import { theme } from '../theme';
import { Controller } from 'react-hook-form';

export function Input({ name, control, error, rules, ...rest }) {

    const [isFocused, setIsFocused] = useState(false);

    // O Controller é um componente fornecido pelo react-hook-form que ajuda a integrar os campos de entrada do formulário com o estado gerenciado pela biblioteca. Ele age como uma "ponte" entre os campos de entrada (como o TextInput no seu exemplo) e o estado do formulário gerenciado pelo react-hook-form.
    // rules: Permite a definição de regras de validação específicas para o campo. Isso pode ser usado para validação personalizada.
    return (
        <View
            style={styles.container}
        >
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { value, onChange, onBlur, name, ref, disabled } }) => {

                    return (
                        <TextInput
                            ref={ref}
                            style={[styles.textInput, {
                                backgroundColor: isFocused ? theme.color.defaultColor4 : null,
                                borderColor: isFocused ? theme.color.highlightColor5 : null,
                            }]}
                            value={value}
                            onChangeText={onChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                                setIsFocused(false)
                                onBlur();
                            }}
                            {...rest}
                        />
                    )
                }}
            />
            {error &&
                <Text
                    style={styles.error}
                >
                    {error.message}
                </Text>
            }
            {/* Libere para enteder o criteriaMode: 'all',
            <View>
                {error?.types?.required && <Text style={styles.error}>{error?.types?.required}</Text>}
                {error?.types?.min && <Text style={styles.error}>{error?.types?.min}</Text>}
                {error?.types?.matches && <Text style={styles.error}>{error?.types?.matches}</Text>}
            </View>
            */}
        </View>
    );
}