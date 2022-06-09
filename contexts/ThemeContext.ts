// Modules imports
import { createContext } from "react";

// Local Imports
import Colors from "../theme/Colors";
import { ThemeContextProps } from './../types/ThemeProps';

// initial value
const defaultValue: ThemeContextProps = {
    mode: "light",
    dark: false,
    colors: Colors.light.colors,
    changeMode: () => { },
}

// Context
const ThemeContext = createContext<ThemeContextProps>(defaultValue);

// exports
export default ThemeContext;