// Packages Imports
import { View, StyleSheet } from "react-native";
import { SeperateMarginProps } from "../../types/GlobalTypes";

// Local Imports
import AppText from "../App/AppText";

// interface for RowTextCard
export interface RowTextCardProps extends SeperateMarginProps {
  title?: string;
  description?: string;
}

// function component for RowTextCard
function RowTextCard(props: RowTextCardProps) {
  // Destructuring props
  const { title, description, ...otherProps } = props;

  // render
  return (
    <View style={[styles.container, otherProps]}>
      <AppText text={`${title}: `} size={16} family="Montserrat-Bold" />

      <View style={{ flex: 1 }}>
        <AppText text={description} size={16} numberOfLines={1} adjustsFontSizeToFit={true} />
      </View>
    </View>
  );
}

// exports
export default RowTextCard;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
});
