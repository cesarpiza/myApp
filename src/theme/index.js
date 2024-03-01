import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

export const theme = {
    size: {
        screenWidth: width,
        screenHeight: height,
    },
    color: {
        defaultColor1: '#000000',
        defaultColor2: '#ffffff',
        defaultColor3: '#808080',
        defaultColor4: '#BFBFBF',
        defaultColor5: '#E6E6E6',
        highlightColor1: '#624E81',
        highlightColor2: '#E79E23',
        highlightColor3: '#1C1C1E',
        highlightColor4: '#F1EEF1',
        highlightColor5: '#0AB5FF',
        highlightColor6: '#992000',
    },
    fontSize: {
        gg: 38,
        g: 32,
        m: 26,
        p: 20,
        pp: 16,
    },
    spacing: {
        gg: 40,
        g: 30,
        m: 20,
        p: 10,
        pp: 5,
    }
}