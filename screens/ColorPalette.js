import { useRoute } from '@react-navigation/core';
import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { ColorBox } from '../components/ColorBox';

export const ColorPalette = () => {
  const {
    params: { colors, paletteName },
  } = useRoute();

  return (
    <View style={styles.container}>
      <FlatList // Lists components scroll automatically
        data={colors}
        keyExtractor={(item) => item.colorName} // Not need in case the data already has key
        renderItem={({ item: { colorName, hexCode } }) => (
          <ColorBox colorName={colorName} hexCode={hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
