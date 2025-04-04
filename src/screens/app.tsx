import { type FC } from "react";
import { StyleSheet, View, type ImageSourcePropType } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import PlaceholderImage from "@/assets/images/background-image.png";
import { ImageViewer } from "@/components/image-viewer";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage as ImageSourcePropType}
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
});

registerRootComponent(App);
