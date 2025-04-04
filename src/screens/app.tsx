import { type FC } from "react";
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import PlaceholderImage from "../assets/images/background-image.png";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={PlaceholderImage as ImageSourcePropType}
          style={styles.image}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

registerRootComponent(App);
