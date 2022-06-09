// Packages Imports
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Local Imports
import { ChildrenProps } from "../types/GlobalTypes";
import ThemeContext from "../contexts/ThemeContext";

// interface for Navigation Provider
export interface NavigationProps extends ChildrenProps {}

// function component for NavigationProvider
function NavigationProvider(props: NavigationProps) {
  // Destructuring props
  const { children } = props;

  // Get the theme
  const { colors, dark } = useContext(ThemeContext);

  // render
  return <NavigationContainer theme={{ colors, dark }}>{children}</NavigationContainer>;
}

// exports
export default NavigationProvider;
