// Packages Imports
import { useEffect, useState } from "react";
import { Appearance, StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as NavigationBar from "expo-navigation-bar";

// Local Imports
import AppColors from "../theme/Colors";
import { AppThemeProps } from "../types/ThemeProps";
import { ChildrenProps } from "../types/GlobalTypes";
import ThemeContext from "../contexts/ThemeContext";

// interface for Theme Provier
export interface ThemeProviderProps extends ChildrenProps {}

// function component for ThemeProvider
function ThemeProvider(props: ThemeProviderProps) {
  // Destructuring props
  const { children } = props;

  // Local State
  const [theme, Settheme] = useState<AppThemeProps>(AppColors.light);

  // Set the initial navigation bar color
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(theme.colors.background);
  }, [theme]);

  // Light/Dark mode change listener
  useEffect(() => {
    const modeListener = Appearance.addChangeListener(({ colorScheme }) => ChangeMode(colorScheme));

    return () => {
      modeListener.remove();
    };
  }, []);

  // function to change theme
  const ChangeMode = (mode: string) => {
    if (mode === "light") {
      Settheme(AppColors.light);
    } else {
      Settheme(AppColors.dark);
    }
  };

  // Bar Style
  const barStyle = theme.dark === false ? "dark-content" : "light-content";

  // StatusBar background color
  const barBackgroundColor = theme.colors.background;

  // React Native Paper Theme Provider
  const ReactNativePaperTheme: any = {
    ...DefaultTheme,
    colors: theme.colors,
    dark: theme.dark,
  };

  // Prepare the object to send to child component
  const childValue: any = {
    dark: theme.dark,
    mode: theme.dark === false ? "light" : "dark",
    colors: theme.colors,
    changeMode: ChangeMode,
  };

  // render
  return (
    <ThemeContext.Provider value={childValue}>
      {/* StatusBar */}
      <StatusBar barStyle={barStyle} backgroundColor={barBackgroundColor} animated={true} />

      <GestureHandlerRootView style={{ flex: 1, backgroundColor: barBackgroundColor }}>
        {/* React Native Paper Theme */}
        <PaperProvider theme={ReactNativePaperTheme}>{children}</PaperProvider>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}

// exports
export default ThemeProvider;
