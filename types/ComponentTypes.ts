// Packages imports
import { ColorValue, GestureResponderEvent, StyleProp, TextProps, TextStyle, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

// Local Imports
import { ChildrenProps, SeperateMarginProps } from "./GlobalTypes";
import { ReactNativePaperTextInputProps } from "./PaperTypes"

// AnimatedView Props interface
export interface AnimatedViewProps extends Animated.AnimateProps<ViewStyle>, ChildrenProps {
    style?: any;
    layoutDisabled?: boolean
}

// interface for AppContainer
export interface AppContainerProps extends ChildrenProps {
    style?: StyleProp<ViewStyle>;
    backgroundColor?: ColorValue;
    lightBackgroundColor?: string;
    darkBackgroundColor?: string;
}

// AppIcon props interface
export interface AppIconProps extends SeperateMarginProps {
    name?: any;
    family?: string;
    color?: ColorValue;
    size?: number;
    onPress?: ((event: GestureResponderEvent) => void) | any;
    loading?: boolean;
    style?: StyleProp<TextStyle>;
}

// interface for AppText
export interface AppTextProps extends TextProps, SeperateMarginProps {
    text?: string;
    color?: ColorValue;
    size?: number;
    family?: string;
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal";
    disableLayout?: boolean;
    disabled?: boolean;
}

// final type for AppTextInput 
export type AppTextInputProps = Omit<ReactNativePaperTextInputProps, 'error'> & {
    error?: string;
    helperTextProps?: HelperTextProps;
    containerStyle?: StyleProp<ViewStyle>;
    leftIconProps?: AppIconProps;
    rightIconProps?: AppIconProps;
    controlled?: boolean;
    roundness?: number;
    showHelper?: boolean;
};

// interface for HelperText
export interface HelperTextProps {
    text?: string;
    type?: "error" | "info";
    visible?: boolean;
    padding?: "none" | "normal";
    style?: StyleProp<TextStyle>;
}