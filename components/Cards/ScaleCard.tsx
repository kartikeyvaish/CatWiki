// Packages Imports
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";

// Local Imports
import AppText from "../App/AppText";
import Filler from "../Seperator/Filler";

// interface for ScaleCard
export interface ScaleCardProps {
  title?: string;
  scale?: number;
}

// function component for ScaleCard
function ScaleCard(props: ScaleCardProps) {
  // Destructuring props
  const { scale = 0, title } = props;

  // Shared values
  const progress = useSharedValue(0);

  // on load animation
  useEffect(() => {
    progress.value = withTiming(scale, { duration: 1000 });
  }, [scale]);

  // render
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <AppText text={`${title}: `} size={16} family="Montserrat-Bold" />
      </View>

      <View style={{ flex: 1.5, flexDirection: "row", alignItems: "center" }}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Filler key={index} index={item} progress={progress} />
        ))}
      </View>
    </View>
  );
}

// exports
export default ScaleCard;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  filler: {
    flex: 1,
    height: 10,
    borderRadius: 12,
    marginLeft: 5,
    marginRight: 5,
  },
});
