import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const styles = StyleSheet.create({
    container: {

    },
    textInput: {
        borderWidth: 1,
        borderRadius: theme.spacing.p,
        fontSize: theme.fontSize.pp,
        padding: theme.spacing.pp + 2,
    },
    error: {
        color: theme.color.highlightColor6,
        fontSize: theme.fontSize.pp - 2,
    }
});