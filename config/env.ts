// packages imports
import env_variables from "react-native-config";

// types imports 
import { EnvironmentVariablesProps } from "../types/EnvironmentTypes";

// Construct the Environment Variables
const env: EnvironmentVariablesProps = { ...env_variables }

// Exports
export default env;