import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, Link } from "expo-router";

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Oups page non retrouvée !" }} />

              <View style={styles.container}>
                  <Text style={styles.text}>Hello Expo</Text>
                  <Link href="/" style={styles.linkText}>Go to home</Link>
                </View>
        </>
    );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#25292e",
    },
  
    text: { 
      color: "#fff",    
    },
    linkText: {
      fontSize: 20,
      textDecorationLine: "underline",
      color: "#fff",
    },
  });
  