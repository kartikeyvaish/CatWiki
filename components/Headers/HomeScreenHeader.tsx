// Packages Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import AppIcon from "../App/AppIcon";
import AppText from "../App/AppText";
import { AppIconProps, AppTextProps } from "../../types/ComponentTypes";
import IconNames from "../../constants/IconNames";

// interface for HomeScreenHeader
export interface HomeScreenHeaderProps {
  titleProps?: AppTextProps;
  iconProps?: AppIconProps;
}

// function component for HomeScreenHeader
function HomeScreenHeader(props: HomeScreenHeaderProps) {
  // Destructuring props
  const { titleProps, iconProps } = props;

  // render
  return (
    <View style={styles.container}>
      <AppText
        text="CatWiki"
        family="MysteryQuest-Regular"
        size={24}
        marginRight={8}
        {...titleProps}
      />
      <AppIcon family={IconNames.FontAwesome5} name="cat" size={24} {...iconProps} />
    </View>
  );
}

// exports
export default HomeScreenHeader;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
