// Packages Imports
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Local Imports
import AppContainer from "../components/App/AppContainer";
import AppIcon from "../components/App/AppIcon";
import { AppScreenProps } from "../navigation/NavigationProps";
import AppTextInput from "../components/Inputs/AppTextInput";
import IconNames from "../constants/IconNames";
import ResultsCard from "../components/Cards/ResultsCard";
import { searchBreed } from "../api/API";

// function component for SearchScreen
function SearchScreen(props: AppScreenProps<"SearchScreen">) {
  // Destructuring props
  const { navigation } = props;

  // Local States
  const [SearchQuery, SetSearchQuery] = useState("");
  const [SearchResults, SetSearchResults] = useState([]);
  const [Loading, SetLoading] = useState(false);

  // Search query Updation Search
  // This useEffect makes sure that whenever the user types for a breed
  // the search takes place only when the user has stopped typing for a second
  useEffect(() => {
    const typeDelayFunction = setTimeout(() => {
      if (SearchQuery.length) SearchBreedAPI();
    }, 500);

    return () => clearTimeout(typeDelayFunction);
  }, [SearchQuery]);

  // api call to search for breed
  const SearchBreedAPI = async () => {
    try {
      SetLoading(true);
      const apiResponse = await searchBreed(SearchQuery);
      SetLoading(false);

      if (apiResponse.ok) {
        SetSearchResults(apiResponse.data);
      }
    } catch (error) {}
  };

  // render
  return (
    <AppContainer style={styles.container}>
      <View style={styles.topBar}>
        <AppIcon
          family={IconNames.Entypo}
          name="cross"
          size={30}
          onPress={() => navigation.goBack()}
          marginBottom={10}
        />
      </View>

      <AppTextInput
        placeholder="Search"
        mode="outlined"
        roundness={100}
        onChangeText={SetSearchQuery}
        disabled={Loading}
        rightIconProps={{
          family: IconNames.Feather,
          name: "search",
          size: 24,
          marginRight: 15,
          loading: Loading,
        }}
      />

      <FlatList
        data={SearchResults}
        keyExtractor={item => item.id}
        keyboardShouldPersistTaps="always"
        renderItem={({ item }) => (
          <ResultsCard {...item} onPress={() => navigation.replace("BreedDetailsScreen", item)} />
        )}
      />
    </AppContainer>
  );
}

// exports
export default SearchScreen;

// styles
const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  topBar: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
