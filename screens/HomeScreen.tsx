// Packages Imports
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";

// Local Imports
import AppContainer from "../components/App/AppContainer";
import AppIcon from "../components/App/AppIcon";
import AppImage from "../components/Image/AppImage";
import AppText from "../components/App/AppText";
import { AppScreenProps } from "../navigation/NavigationProps";
import ColorPallete from "../constants/ColorPallete";
import { getBreeds } from "../api/API";
import HomeItemCard from "../components/Cards/HomeItemCard";
import HomeScreenHeader from "../components/Headers/HomeScreenHeader";
import IconNames from "../constants/IconNames";
import Seperator from "../components/Seperator/Seperator";

// function component for HomeScreen
function HomeScreen(props: AppScreenProps<"SearchScreen">) {
  // Destructuring props
  const { navigation } = props;

  // Local States
  const [CatsCard, SetCatsCard] = useState([]);
  const [Loading, SetLoading] = useState(true);

  // get the theme
  const { dark } = useTheme();

  // light black background
  const cardBackgroundColor = dark ? ColorPallete.lightBlack : "#050709";

  useEffect(() => {
    GetBreedsAPI();
  }, []);

  // get top four breeds
  const GetBreedsAPI = async () => {
    try {
      SetLoading(true);
      const apiResponse = await getBreeds();
      SetLoading(false);

      if (apiResponse.ok) {
        SetCatsCard(apiResponse.data);
      }
    } catch (error) {
      SetLoading(false);
    }
  };

  // If loading then show loader
  if (Loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={30} color={ColorPallete.primary} />
        <AppText text="Getting Cats for you..." marginTop={20} size={20} />
      </View>
    );

  // render
  return (
    <AppContainer>
      <ScrollView>
        <HomeScreenHeader />

        <View style={{ margin: 18, borderRadius: 20, overflow: "hidden" }}>
          {/* First Container */}
          <View
            style={{
              backgroundColor: cardBackgroundColor,
              height: 150,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <AppText
                text="CatWiki"
                family="MysteryQuest-Regular"
                size={16}
                color={ColorPallete.white}
                marginLeft={29}
                marginTop={25}
              />
              <AppText
                text="Get to know more about your cat breed"
                family="Montserrat-Medium"
                size={12}
                color={ColorPallete.white}
                marginTop={10}
                marginLeft={29}
                weight="500"
              />

              <Pressable
                onPress={() => navigation.navigate("SearchScreen")}
                style={styles.searchBox}
              >
                <AppText
                  text="Search"
                  size={12}
                  family="Montserrat-Medium"
                  color={ColorPallete.black}
                />
                <AppIcon
                  family={IconNames.Feather}
                  name="search"
                  size={17}
                  color={ColorPallete.black}
                />
              </Pressable>
            </View>

            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: "asset:/images/catPreview.png" }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>

          {/* Second Container */}
          <View
            style={{
              backgroundColor: dark ? ColorPallete.lightBlack : "#E3E1DC",
              paddingBottom: 20,
            }}
          >
            <AppText
              text="Most Searched Breeds"
              marginLeft={29}
              marginTop={18}
              family="Montserrat-SemiBold"
              size={12}
            />

            <Seperator />

            <View style={{ maxWidth: "70%" }}>
              <AppText
                text="66+ Breeds For you to discover"
                marginLeft={29}
                marginTop={18}
                family="Montserrat-Bold"
                size={20}
                marginBottom={20}
              />
            </View>

            {CatsCard.length === 4 ? (
              <>
                <View style={{ flexDirection: "row", margin: 5 }}>
                  <HomeItemCard
                    {...CatsCard[0]}
                    onPress={() => navigation.navigate("BreedDetailsScreen", CatsCard[0])}
                  />
                  <HomeItemCard
                    {...CatsCard[1]}
                    onPress={() => navigation.navigate("BreedDetailsScreen", CatsCard[1])}
                  />
                </View>

                <View style={{ flexDirection: "row", margin: 5 }}>
                  <HomeItemCard
                    {...CatsCard[2]}
                    onPress={() => navigation.navigate("BreedDetailsScreen", CatsCard[2])}
                  />
                  <HomeItemCard
                    {...CatsCard[3]}
                    onPress={() => navigation.navigate("BreedDetailsScreen", CatsCard[3])}
                  />
                </View>
              </>
            ) : null}
          </View>
        </View>

        <Seperator marginTop={30} />

        {/* Why should you have a cat section */}
        <AppText
          text="Why should you have a cat?"
          size={40}
          family="Montserrat-Bold"
          marginLeft={18}
          marginTop={16}
        />

        <AppText
          text="Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves"
          size={18}
          family="Montserrat-Medium"
          marginLeft={18}
          marginTop={42}
          color={dark ? undefined : "#291507"}
        />

        <Pressable
          style={{ flexDirection: "row", marginTop: 18, alignItems: "center" }}
          onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/Cat")}
        >
          <AppText
            text="Read More"
            size={14}
            family="Montserrat-Medium"
            marginLeft={18}
            color={dark ? undefined : "#291507"}
            marginBottom={CatsCard.length ? 0 : 10}
          />

          <AppIcon
            family={IconNames.AntDesign}
            name="arrowright"
            marginLeft={8}
            size={18}
            color={dark ? undefined : "#7F736A"}
          />
        </Pressable>

        {/* Three Images Section */}
        {CatsCard.length > 3 ? (
          <>
            <View style={{ margin: 18, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <AppImage
                  uri={CatsCard[0].url}
                  rounded={false}
                  style={{ width: "100%", height: 105, borderRadius: 24 }}
                />

                <AppImage uri={CatsCard[1].url} rounded={false} style={styles.secondImage} />
              </View>
              <View style={{ flex: 1, paddingLeft: 20 }}>
                <AppImage
                  uri={CatsCard[2].url}
                  rounded={false}
                  style={{ width: "100%", height: 242, borderRadius: 24 }}
                />
              </View>
            </View>
          </>
        ) : null}

        {/* Footer Component */}
        <View
          style={[
            styles.footer,
            { backgroundColor: dark ? ColorPallete.lightBlack : ColorPallete.black },
          ]}
        >
          <HomeScreenHeader
            titleProps={{ color: ColorPallete.white, size: 18, marginTop: 10 }}
            iconProps={{ color: ColorPallete.white, size: 18, marginTop: 10 }}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppIcon
              family={IconNames.FontAwesome}
              name="copyright"
              color={ColorPallete.white}
              marginRight={15}
              marginLeft={15}
              size={20}
            />
            <AppText
              text="created by"
              color={ColorPallete.white}
              numberOfLines={1}
              adjustsFontSizeToFit={true}
            />
            <AppText
              text=" kartikey"
              color={ColorPallete.white}
              family="Montserrat-Bold"
              numberOfLines={1}
              adjustsFontSizeToFit={true}
            />
            <AppText
              text=" - devChallenge.io 2022"
              color={ColorPallete.white}
              numberOfLines={1}
              adjustsFontSizeToFit={true}
            />
          </View>
        </View>
      </ScrollView>
    </AppContainer>
  );
}

// exports
export default HomeScreen;

// styles
const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: ColorPallete.white,
    width: "55%",
    marginLeft: 29,
    marginTop: 18,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13,
    paddingTop: 8,
    paddingBottom: 8,
  },
  footer: {
    marginLeft: 18,
    marginRight: 18,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 20,
  },
  secondImage: {
    width: "80%",
    height: 184,
    borderRadius: 24,
    alignSelf: "flex-end",
    marginTop: 17,
  },
});
