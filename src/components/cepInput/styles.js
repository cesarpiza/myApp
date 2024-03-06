import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {

    },
    textInput: {
        backgroundColor: theme.color.highlightColor4,
        fontSize: theme.fontSize.pp,
        padding: theme.spacing.pp,
    },
    error: {
        fontSize: theme.fontSize.pp - 2,
        color: theme.color.highlightColor4,
    },
});