// Packages Imports
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

// inteface for Filler
export interface FillerProps {
  index: number;
  progress: SharedValue<number>;
}

// function component for Filler
function Filler(props: FillerProps) {
  // Destructuring props
  const { index, progress } = props;

  const animatedStyles = useAnimatedStyle(() => {
    const width = interpolate(progress.value, [index - 1, index], [0, 100], Extrapolate.CLAMP);

    return {
      width: `${width}%`,
    };
  });

  // render
  return (
    <Animated.View style={styles.filler}>
      <Animated.View style={[styles.innerMover, animatedStyles]} />
    </Animated.View>
  );
}

// exports
export default Filler;

// styles
const styles = StyleSheet.create({
  filler: {
    flex: 1,
    height: 10,
    borderRadius: 12,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#E0E0E0",
    overflow: "hidden",
  },
  innerMover: { position: "absolute", width: "100%", height: "100%", backgroundColor: "#544439" },
});
