// Local Imports
import AppNavigator from "./navigation/AppNavigator";
import NavigationProvider from "./providers/NavigationProvider";
import ThemeProvider from "./providers/ThemeProvider";

// function component for App
function App() {
  // render
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppNavigator />
      </NavigationProvider>
    </ThemeProvider>
  );
}

// exports
export default App;
