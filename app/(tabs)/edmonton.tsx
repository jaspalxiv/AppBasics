import React from "react";
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import Link from "@/component/Link";

const ImageWithLink = () => {
  const handlePress = () => {
    Linking.openURL("https://www.edmonton.ca"); // Replace with your link
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{ uri: "https://cdn.britannica.com/47/147947-050-E36E2480/North-Saskatchewan-River-Edmonton-Canada-Alberta.jpg" }} // Replace with your image URL
        style={styles.image}
      />

      <Link url={"https://www.edmonton.ca"} />
      <Text>
        Edmonton is home to West Edmonton Mall, which was once the largest mall in the world and still holds the title for the largest in North America, featuring a waterpark, amusement park, and even an indoor lake with real boats!       </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default ImageWithLink;
