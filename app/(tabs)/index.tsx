import { Platform, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import ToastManager, { Toast } from "toastify-react-native";
import { useEffect, useRef, useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";

const PlaceholderImage = require("../../assets/images/background-image.png");
export default function Index() {
  const imageRef = useRef(null);

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  //
  // Sticker Smash

  // Redemarrer
  // Sauvegarder
  // Error: The method or property MediaLibrary.saveToLibraryAsync is not available on web, are you sure you've linked all the native dependencies properly?
  // index
  // about

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS === "web") {
      try {
        // @ts-ignore
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // @ts-ignore
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          Toast.success("Image enregistrée");
        }
      } catch (error) {
        Toast.error(`${error}`);
        console.log(error);
      }
    }
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else ToastManager.info("Vous n'avez sélectionné aucune image");
  };

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View ref={imageRef} style={{ flex: 1 }}>
        <ImageViewer imageSource={selectedImage || PlaceholderImage} />
        {pickedEmoji &&
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions
        ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Redemarrer" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                icon="save-alt"
                label="Sauvegarder"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        )
        : (
          <View style={styles.footerContainer}>
            <Button
              onPress={pickImageAsync}
              theme="primary"
              label="Choisir une photo"
            />
            <Button
              onPress={() => setShowAppOptions(true)}
              label="Utiliser cette photo"
            />
          </View>
        )}

      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
      >
        <EmojiList
          onSelect={(item) => setPickedEmoji(item)}
          onCloseModal={onModalClose}
        />
      </EmojiPicker>
      <ToastManager position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  // imageContainer: {
  //   flex: 1,
  // },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
    alignItems: "center",
  },
  optionsRow: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
