import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import LeftArrow from "../assets/left-arrow.png";
import SearchMenu from "../assets/search-menu.png";
function TransectionScreen() {
  return (
    <View>
      <View Style={styles.header}>
        {/* header */}
        <View Style={styles.leftArrow}>
          <Image source={LeftArrow} width={10} />
        </View>
        <View Style={styles.title}>
          <Text>Transections</Text>
        </View>
        <View Style={styles.searchMenu}>
          <Image source={SearchMenu} width={10} />
        </View>
      </View>
      <View Style={styles.list}>{/* list */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 100,
    backgroundColor: "blue",
  },
  leftArrow: {
    width: 20,
  },
  title: {
    width: 60,
  },
  searchMenu: {
    width: 20,
  },
});

export default TransectionScreen;
