// Imports
import { AppThemeProps } from './../types/ThemeProps';
import ColorPallete, { ReactNativePaperColors } from "../constants/ColorPallete"

// Dark theme colors
const dark: AppThemeProps = {
    colors: {
        background: ColorPallete.black,
        card: ColorPallete.orange,
        border: ColorPallete.orange,
        primary: ColorPallete.primaryDark,
        text: ColorPallete.white,
        notification: ColorPallete.primary,
        ...ReactNativePaperColors,
    },
    dark: true,
}

// Light theme colors
const light: AppThemeProps = {
    colors: {
        background: ColorPallete.white,
        card: ColorPallete.white,
        border: ColorPallete.orange,
        primary: ColorPallete.primary,
        text: ColorPallete.black,
        notification: ColorPallete.primary,
        ...ReactNativePaperColors,
    },
    dark: false,
}

// exporting both the themes
export default { dark, light }