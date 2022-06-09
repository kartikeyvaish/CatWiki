// Packages Imports
import { StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";

// Local Imports
import AnimatedView from "../Animated/AnimatedView";
import AppText from "../App/AppText";

// interface for Results Card
export interface ResultsCardProps {
  name: string;
  onPress?: () => void;
}

// function component for ResultsCard
function ResultsCard(props: ResultsCardProps) {
  // Destructuring props
  const { name, onPress } = props;

  // render
  return (
    <AnimatedView flex={0}>
      <TouchableRipple onPress={onPress} style={styles.container}>
        <AppText text={name} size={18} family="Montserrat-Medium" />
      </TouchableRipple>
    </AnimatedView>
  );
}

// exports
export default ResultsCard;

// styles
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 5,
  },
});
