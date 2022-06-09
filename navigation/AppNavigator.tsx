// Packages Imports
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import AnimatedView from "../components/Animated/AnimatedView";
import { AppStackParamsList } from "./NavigationProps";

// Screen imports
import BreedDetailsScreen from "../screens/BreedDetailsScreen";
import HomeScreen from "./../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";

// Create a Stack Navigator
const Stack = createStackNavigator<AppStackParamsList>();

// Function for AppNavigator
function AppNavigator() {
  // get the theme
  const { colors } = useTheme();

  // screen options for the stack navigator
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: colors.background,
    },
  };

  // Render
  return (
    <AnimatedView>
      <Stack.Navigator screenOptions={screenOptions}>
        {/* App Screens */}
        <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name={"BreedDetailsScreen"} component={BreedDetailsScreen} />
      </Stack.Navigator>
    </AnimatedView>
  );
}

// Exporting AppNavigator
export default AppNavigator;
