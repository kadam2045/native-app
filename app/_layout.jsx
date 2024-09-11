import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Heyyyy lets build!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColorL: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
