import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
    ActivityIndicator,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { Controller } from 'react-hook-form';
import { theme } from '../../theme';
import { schema } from '../../schema/';
import { useCPFMask } from '../../hook/useCPFMask';
import { useCelularMask } from '../../hook/useCelularMask';
import { useCepMask } from '../../hook/useCepMask';
import { useSendUserData } from '../../hook/useSendUserData';
import { useGetCepDetails } from '../../hook/useGetCepDetails';
import { useUseForm } from '../../hook/useForm';
import { Input } from '../../components/input';
import { CepInput } from '../../components/cepInput';

export function Home() {

    const [isCepLoading, setIsCepLoading] = useState(false);
    const [isCepError, setIsCepError] = useState(false);

    const { control, handleSubmit, errors, isSubmitting, watch, setValue } = useUseForm(schema)

    const cepValue = watch('cep');
    const celularValue = watch('celular');
    const CPFValue = watch('cpf');

    useEffect(() => {
        setValue('cep', useCepMask(cepValue));
        setValue('celular', useCelularMask(celularValue));
        setValue('cpf', useCPFMask(CPFValue));
    }, [cepValue, celularValue, CPFValue, setValue]);

    // Forma de usar máscara sem assistir/watch o valor (evitando o re-render)
    // function phoneNumber2(text, onChange) {
    //     const value = useCelularMask(text);
    //     onChange(value);
    // }

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={styles.title}
            >
                cep
            </Text>
            <View
                style={styles.textInputContainer}
            >
                {/* 
                // O prop validate no React Hook Form (RHF) é utilizado para fornecer uma função de validação personalizada para o campo controlado pelo <Controller>. Esta função será chamada durante a validação do formulário e permitirá que você defina regras de validação específicas para o campo associado. obs: rules e validate do react hook form só funcionam se a validação não estiver sendo controlada por terceiros: yup, zod...resolver: yupResolver(schema),
                <Controller
                    name='email'
                    control={control}
                    rules={{
                        required: 'Este campo é obrigatório',
                        // Você pode passar uma função de retorno de chamada como argumento para validar. obs: a função de validação definida na propriedade validate do React Hook Form (<Controller rules={{ validate: customValidation }} />) não anula as outras validações de regras (rules) associadas ao campo. Pelo contrário, ela complementa as regras existentes.
                        validate: (value) => {
                            if (value === 'cesar@gmail.com') return 'o email "cesar@gmail.com" já foi cadastrado!';

                            return undefined;
                        },
                        // ou pode passar um objeto de funções de retorno de chamada para validar todas elas.
                        validate: {
                            // obs: "emailIgual" e "menor" são nomes inventados, pode ser qualquer um... e "emailIgual" e "menor" apareceram no type do errors: errors.email?.type
                            emailIgual: (value) => {
                                if (value === 'cesar@gmail.com') return 'o email "cesar@gmail.com" já foi cadastrado!';

                                return undefined;
                            },
                            menor: (value) => {
                                if (value.length < 3) return 'Precisa ter ao menos 3 caracteres';

                                return undefined;
                            },
                        }
                    }}
                    render={({ field: { value, onChange, ref, onBlur } }) => (
                        <TextInput
                            autoCapitalize='none'
                            placeholder='Email'
                            editable={!isSubmitting}
                            ref={ref}
                            onBlur={onBlur}
                            style={styles.textInput}
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                <Text
                    style={styles.error}
                >
                    {errors.email?.message}
                </Text> 
                */}
                <Input
                    name='email'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='Email'
                    errors={errors.email?.message}
                />
                <CepInput
                    editable={!isSubmitting}
                    keyboardType='numeric'
                    name='cep'
                    control={control}
                    autoCapitalize='none'
                    placeholder='CEP'
                    errors={errors.cep?.message}
                    useGetCepDetails={useGetCepDetails}
                    cepValue={cepValue}
                    setValue={setValue}
                    setIsCepLoading={setIsCepLoading}
                    setIsCepError={setIsCepError}
                />
                <Input
                    name='rua'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='Rua'
                    errors={errors.rua?.message}
                />
                <Input
                    name='bairro'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='Bairro'
                    errors={errors.bairro?.message}
                />
                <Input
                    name='complemento'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='Complemento'
                />
                <Input
                    name='cidade'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='Cidade'
                    errors={errors.cidade?.message}
                />
                <Input
                    name='estado'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='Estado'
                    errors={errors.estado?.message}
                />
                <Input
                    name='celular'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='Celular'
                    errors={errors.celular?.message}
                />
                <Input
                    name='cpf'
                    control={control}
                    autoCapitalize='none'
                    editable={!isSubmitting}
                    placeholder='CPF'
                    errors={errors.cpf?.message}
                />
                {/*
                //  // Forma de usar máscara sem assistir/watch o valor (evitando o re-render)
                <Controller
                    name={'phoneNumber2'}
                    control={control}
                    render={({ field: { value, onChange, ref, onBlur } }) => (
                        <TextInput
                            ref={ref}
                            autoCapitalize='none'
                            editable={!isSubmitting}
                            placeholder='phoneNumber2'
                            onBlur={onBlur}
                            style={styles.textInput}
                            value={value}
                            onChangeText={(text) => phoneNumber2(text, onChange)}
                        />
                    )}
                />
                <Text
                    style={styles.error}
                >
                    {errors?.phoneNumber2?.message}
                </Text> */}
                <Controller
                    control={control}
                    name='check'
                    render={({ field: { onChange, value } }) => (
                        <Pressable style={styles.checkContainer}
                            onPress={() => {
                                // Quando você está utilizando o react-hook-form com um campo do tipo checkbox, o value do campo é, por padrão, um booleano representando se o checkbox está marcado ou não. Então, em seu código, quando você faz onChange(!value), você está invertendo o valor atual do checkbox, alternando entre true e false: console.log(value);
                                console.log(value);
                                onChange(!value);
                            }}
                        >
                            <View style={styles.check}>
                                <Feather style={{ opacity: value ? 1 : 0 }} name="check" size={theme.fontSize.pp} color="black" />
                            </View>
                            <Text style={styles.checkText}>
                                aceitar os termos
                            </Text>
                        </Pressable>
                    )}
                />
                <Text
                    style={styles.error}
                >
                    {errors.check?.message}
                </Text>
            </View>
            <TouchableOpacity
                disabled={isSubmitting}
                style={styles.button}
                onPress={handleSubmit(useSendUserData)}
            >
                {isSubmitting ?
                    <ActivityIndicator size={theme.fontSize.p} />
                    :
                    <Text
                        style={styles.buttonText}
                    >
                        enviar
                    </Text>
                }
            </TouchableOpacity>
            {isCepLoading &&
                <View
                    style={styles.activityIndicatorContainer}
                >
                    <ActivityIndicator size={54} />
                </View>
            }
        </SafeAreaView>
    );
}