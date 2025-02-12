import React from "react";
import { Text, TouchableOpacity, StyleSheet, Linking } from "react-native";

// Define props interface
interface LinkProps {
  url: string;
}

const Link: React.FC<LinkProps> = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
      <Text style={styles.linkText}>Go to city page</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignSelf: "center",
  },
  linkText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Link;
