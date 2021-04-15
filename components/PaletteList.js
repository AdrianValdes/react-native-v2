import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const PaletteList = ({ paletteName, colors }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('ColorPalette', {
          paletteName: paletteName,
          colors: colors,
        });
      }}
    >
      <Text style={styles.text}>{paletteName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
