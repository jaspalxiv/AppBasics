import React from "react";
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import Link from "@/component/Link";

const ImageWithLink = () => {


  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={{ uri: "https://www.nomadicmatt.com/wp-content/uploads/2019/09/calgaryguide.jpg" }} // Replace with your image URL
        style={styles.image} 
      />

      <Link url={"https://www.calgary.ca/home.html"}/>

      <Text>
      The Calgary Stampede, known as the "Greatest Outdoor Show on Earth," attracts over a million visitors annually and features one of the world's largest rodeos!
      </Text>
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
