// Packages Imports
import { useContext } from "react";
import { StyleProp, TextStyle } from "react-native";

// Local Imports
import { AppTextProps } from "../../types/ComponentTypes";
import ThemeContext from "../../contexts/ThemeContext";
import Animated, { Layout } from "react-native-reanimated";

// function component for AppText
function AppText(props: AppTextProps) {
  // Destructuring props
  const {
    text,
    color,
    size,
    style,
    family,
    marginLeft,
    marginBottom,
    marginRight,
    marginTop,
    margin,
    weight = "normal",
    disableLayout = false,
    disabled = false,
    onPress,
    ...otherProps
  } = props;

  const { colors } = useContext(ThemeContext);

  // Assemble textStyles
  const finalStyles: StyleProp<TextStyle> = [
    {
      color: color ? color : colors.text,
      fontSize: size,
      fontFamily: family,
      marginLeft,
      marginBottom,
      marginRight,
      marginTop,
      margin,
      fontWeight: weight,
    },
    style,
  ];

  // if no text, return null
  if (!text) return null;

  // render
  return (
    <Animated.Text
      layout={disableLayout ? undefined : Layout}
      style={finalStyles}
      onPress={disabled ? undefined : onPress}
      {...otherProps}
    >
      {text}
    </Animated.Text>
  );
}

// exports
export default AppText;
