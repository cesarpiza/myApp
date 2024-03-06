import { StyleSheet } from 'react-native';
import { theme } from '../../theme/';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.highlightColor1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.m,
    },
    title: {
        fontSize: theme.fontSize.g,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: theme.spacing.p,
    },
    textInputContainer: {
        width: '100%',
        rowGap: theme.spacing.pp - 4,
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
    button: {
        width: '100%',
        height: theme.size.screenHeight * 0.05,
        marginTop: theme.spacing.p,
        paddingVertical: theme.spacing.pp,
        backgroundColor: theme.color.highlightColor2,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: theme.fontSize.pp,
        textTransform: 'uppercase',
        paddingVertical: theme.spacing.pp,
    },
    activityIndicatorContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkContainer: {
        flexDirection: 'row',
    },
    check: {
        backgroundColor: theme.color.highlightColor4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.pp - 2,
        marginRight: theme.spacing.p,
    },
    checkText: {
        textTransform: 'capitalize',
        fontSize: theme.fontSize.pp - 2,
        color: theme.color.highlightColor4,
    }
});