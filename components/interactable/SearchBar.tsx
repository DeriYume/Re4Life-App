import React from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={[styles.searchBar]}>
        <Image style={{ margin: 5 }} source={require('../../assets/icon_search.png')} />
        <TextInput style={styles.searchInput} placeholder='Search Robot' />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: 260
  },
  searchBar: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5A666B',
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 5,
    marginVertical: 10,
  },
});

export default SearchBar;