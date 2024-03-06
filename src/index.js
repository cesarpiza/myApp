import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Home } from './pages/home/';
import { Text, TextInput, View } from 'react-native';
import { theme } from './theme';

// exemplo de input com focus, blur e error de forma mais "nativa"/pura (sem lib)
// function Input() {

//     const [name, setName] = useState('');
//     const [isFilled, setIsFilled] = useState(false);
//     const [isFocus, setIsFocus] = useState(false);
//     const [error, setError] = useState(null);

//     const handleInputChange = (text) => {
//         setName(text);
//         setIsFilled(text.length > 0);
//         if (text.length < 7) {
//             setError('Name must be at least 7 characters');
//         } else {
//             setError(null);
//         }
//     };

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 paddingHorizontal: theme.spacing.m,
//             }}
//         >
//             <TextInput
//                 style={{
//                     borderColor: error ? theme.color.highlightColor6 : isFocus || isFilled ? theme.color.highlightColor5 : theme.color.defaultColor1,
//                     backgroundColor: isFocus || isFilled ? theme.color.defaultColor4 : theme.color.highlightColor4,
//                     borderWidth: 1.5,
//                     width: '100%',
//                     padding: theme.spacing.p,
//                     fontSize: theme.fontSize.pp,
//                     borderRadius: theme.spacing.g,
//                 }}
//                 placeholder='Your name here...'
//                 value={name}
//                 onChangeText={handleInputChange}
//                 onFocus={() => {
//                     setIsFocus(true);
//                 }}
//                 onBlur={() => {
//                     setIsFocus(false);
//                 }}
//             />
//             <Text
//                 style={{
//                     fontSize: theme.fontSize.pp,
//                     color: theme.color.highlightColor6,
//                 }}
//             >
//                 {error}
//             </Text>
//         </View>
//     )
// }

const queryClient = new QueryClient();

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <StatusBar hidden style='auto' />
                <Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {/*
                    // libere para poder usar o "Input" personalizado alí em cima
                    <Screen
                        name='Input'
                        component={Input}
                    />
                    */}
                    <Screen
                        name='Home'
                        component={Home}
                    />
                </Navigator>
            </NavigationContainer>
        </QueryClientProvider >
    );
}