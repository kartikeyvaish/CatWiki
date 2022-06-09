// Packages Imports
import { StyleProp } from "react-native";
import FastImage, { ImageStyle } from "react-native-fast-image";

// Local Imports

export interface AppImageProps {
  uri: string;
  size?: number;
  rounded?: boolean;
  style?: StyleProp<ImageStyle>;
  resizeMode?: "contain" | "cover" | "center" | "stretch";
  borderRadius?: number;
}

// function component for AppImage
function AppImage(props: AppImageProps) {
  // Destructuring props
  const { uri, size = 60, rounded = true, style, resizeMode, borderRadius = 0 } = props;

  // image styles
  const imageStyles: StyleProp<ImageStyle> = [
    {
      width: size,
      height: size,
      borderRadius: rounded ? size : borderRadius,
    },
    style,
  ];

  // render[]
  return <FastImage source={{ uri }} style={imageStyles} resizeMode={resizeMode} />;
}

// exports
export default AppImage;
