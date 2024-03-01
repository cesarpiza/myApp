import { StyleSheet } from 'react-native';
import { theme } from './theme/';

export const styles = StyleSheet.create({
    container: {
        height: theme.size.screenHeight,
        backgroundColor: theme.color.highlightColor4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: theme.size.screenWidth * 0.4,
        fontSize: theme.fontSize.gg,
        fontWeight: 'bold',
        color: theme.color.defaultColor3,
    },
    inputsContainer: {
        width: theme.size.screenWidth * 0.85,
        rowGap: theme.spacing.p,
    },
    buttonContainer: {
        flexDirection: 'row',
        columnGap: theme.spacing.p,
        marginTop: theme.spacing.m,
    },
    button: {
        width: theme.size.screenWidth * 0.25,
        backgroundColor: theme.color.highlightColor2,
        paddingVertical: theme.spacing.p,
        borderRadius: theme.spacing.p,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: theme.fontSize.pp,
        textTransform: 'capitalize',
    }
});