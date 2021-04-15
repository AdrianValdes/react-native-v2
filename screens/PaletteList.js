import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

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
      <Text>{paletteName}</Text>
    </TouchableOpacity>
  );
};
