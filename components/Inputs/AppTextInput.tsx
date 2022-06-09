// Packages Imports
import { useContext } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

// Types Imports
import AppIcon from "../App/AppIcon";
import { AppTextInputProps } from "../../types/ComponentTypes";
import ColorPallete from "../../constants/ColorPallete";
import HelperText from "../App/HelperText";
import ThemeContext from "../../contexts/ThemeContext";
import AnimatedView from "../Animated/AnimatedView";

// function component for AppTextInput
function AppTextInput(props: AppTextInputProps) {
  // Destructuring props
  const {
    error,
    mode = "flat",
    placeholderTextColor,
    style,
    helperTextProps,
    left,
    right,
    leftIconProps,
    rightIconProps,
    containerStyle,
    value,
    controlled,
    roundness = 5,
    showHelper = true,
    ...otherProps
  } = props;

  // get theme
  const { colors } = useContext(ThemeContext);

  // leftIcon
  const leftIcon = left ? (
    left
  ) : leftIconProps?.family ? (
    <TextInput.Icon name={() => <AppIcon {...leftIconProps} />} />
  ) : null;

  // rightIcon
  const rightIcon = right ? (
    right
  ) : rightIconProps?.family ? (
    <TextInput.Icon name={() => <AppIcon {...rightIconProps} />} />
  ) : null;

  // theme for the input
  const inputTheme = {
    roundness: roundness,
    colors: {
      text: colors.text,
      accent: colors.card,
      primary: colors.primary,
      placeholder: colors.text,
      background: colors.background,
      error: ColorPallete.danger,
    },
  };

  // render
  return (
    <AnimatedView flex={0} style={containerStyle}>
      <TextInput
        error={error ? true : false}
        placeholderTextColor={error ? ColorPallete.danger : colors.text}
        style={[{ backgroundColor: colors.background }, style]}
        left={leftIcon}
        right={rightIcon}
        mode={mode}
        underlineColor={colors.text}
        activeUnderlineColor={colors.text}
        outlineColor={colors.text}
        activeOutlineColor={colors.text}
        dense={true}
        theme={inputTheme}
        underlineColorAndroid={colors.text}
        {...(controlled ? { value: value } : {})}
        {...otherProps}
      />

      {showHelper ? (
        <HelperText
          visible={error ? true : false}
          style={{ color: ColorPallete.danger }}
          text={error}
          {...helperTextProps}
        />
      ) : null}
    </AnimatedView>
  );
}

// exports
export default AppTextInput;
