// Packages Imports
import { useTheme } from "@react-navigation/native";
import { View, StyleSheet, Pressable } from "react-native";

// Local Imports
import AppImage from "../Image/AppImage";
import AppText from "../App/AppText";
import Layout from "../../constants/Layout";

const screenWidth = Layout.window.width;

// function component for HomeItemCard
function HomeItemCard(props) {
  // Destructuring props
  const { url, name, onPress } = props;

  // get the theme
  const { dark } = useTheme();

  // render
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={{ maxHeight: screenWidth / 2, width: "100%" }}>
        <AppImage
          uri={url}
          rounded={false}
          style={{ width: "100%", height: "100%", borderRadius: 12 }}
        />
      </View>

      <AppText
        text={name}
        size={14}
        marginTop={11}
        family="Montserrat-Bold"
        color={dark ? undefined : "#291507"}
        onPress={onPress}
      />
    </Pressable>
  );
}

// exports
export default HomeItemCard;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
