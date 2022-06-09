// Packages Imports
import { View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

// Local Imports
import { SeperateMarginProps } from "../../types/GlobalTypes";

// function component for Seperator
function Seperator(props: SeperateMarginProps) {
  // Destructuring props
  const {} = props;

  // get the theme
  const { colors, dark } = useTheme();

  // render
  return (
    <View
      style={[
        styles.container,
        props,
        {
          backgroundColor: dark ? colors.text : "#4D270C",
        },
      ]}
    ></View>
  );
}

// exports
export default Seperator;

// styles
const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 3,
    borderRadius: 77,
    marginLeft: 29,
    marginTop: 6,
  },
});
