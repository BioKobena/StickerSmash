import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Expo</Text>
      <Link href={"/about"} style={styles.linkText}>Go To the about screen</Link>
    </View>
  );
}

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
