// Packages Imports
import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

// Local Imports
import { AppScreenProps } from "../navigation/NavigationProps";
import { getBreedDetails } from "../api/API";
import AppContainer from "../components/App/AppContainer";
import AppImage from "../components/Image/AppImage";
import AppText from "../components/App/AppText";
import ColorPallete from "../constants/ColorPallete";
import RowTextCard from "../components/Cards/RowTextCard";
import ScaleCard from "../components/Cards/ScaleCard";

export interface BreedDetailsProps {
  adaptability?: number;
  affection_level?: number;
  child_friendly?: number;
  description?: string;
  grooming?: number;
  health_issues?: number;
  intelligence?: number;
  life_span?: string;
  name?: string;
  origin?: string;
  social_needs?: number;
  stranger_friendly?: number;
  temperament?: string;
  uri?: string;
  found?: boolean;
}

// function component for BreedDetailsScreen
function BreedDetailsScreen(props: AppScreenProps<"BreedDetailsScreen">) {
  // Destructuring props
  const { route } = props;

  // Local States
  const [BreedDetails, SetBreedDetails] = useState<BreedDetailsProps>(null);
  const [Loading, SetLoading] = useState(true);

  // initial call
  useEffect(() => {
    GetBreedDetails();
  }, []);

  // get breed details
  const GetBreedDetails = async () => {
    try {
      SetLoading(true);
      const apiResponse = await getBreedDetails(route.params.id);
      SetLoading(false);

      if (apiResponse.ok) {
        SetBreedDetails(apiResponse.data);
      } else {
        SetBreedDetails({ found: false });
      }
    } catch (error) {
      SetBreedDetails({ found: false });
      SetLoading(false);
    }
  };

  // if
  if (Loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={30} color={ColorPallete.primary} />
        <AppText text="Getting Breed Details.." marginTop={20} size={20} />
      </View>
    );
  }

  // if not found
  if (!BreedDetails?.found) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AppText text="Breed Details Not Found" marginTop={20} size={20} />
      </View>
    );
  }

  // render
  return (
    <AppContainer>
      <ScrollView>
        <AppImage uri={BreedDetails.uri} rounded={false} style={{ width: "100%", height: 300 }} />

        <View style={styles.container}>
          <AppText text={BreedDetails.name} size={36} family="Montserrat-Medium" />

          <AppText
            text={BreedDetails.description}
            size={18}
            marginTop={15}
            family="Montserrat-Regular"
            marginBottom={10}
          />

          <AppText text={`Temperament`} size={16} family="Montserrat-Bold" />
          <AppText text={BreedDetails.temperament} size={16} marginBottom={10} />

          <RowTextCard title="Origin" description={BreedDetails.origin} />
          <RowTextCard title="Life Span" description={BreedDetails.life_span} marginBottom={15} />

          <ScaleCard title="Adapdibility" scale={BreedDetails.adaptability} />
          <ScaleCard title="Affection level" scale={BreedDetails.affection_level} />
          <ScaleCard title="Child Friendly" scale={BreedDetails.child_friendly} />
          <ScaleCard title="Grooming" scale={BreedDetails.grooming} />
          <ScaleCard title="Intelligence" scale={BreedDetails.intelligence} />
          <ScaleCard title="Health Issues" scale={BreedDetails.health_issues} />
          <ScaleCard title="Social Needs" scale={BreedDetails.social_needs} />
          <ScaleCard title="Straner Friendly" scale={BreedDetails.stranger_friendly} />
        </View>
      </ScrollView>
    </AppContainer>
  );
}

// exports
export default BreedDetailsScreen;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 18,
  },
});
