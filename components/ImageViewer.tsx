import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

type Props = {
    imageSource: string;
};

export default function ImageViewer({ imageSource }: Props) {
    return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
