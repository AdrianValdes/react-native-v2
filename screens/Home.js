import React from 'react';
import { View, FlatList } from 'react-native';
import { COLOR_PALETTES } from '../constants/COLORS';
import { PaletteList } from '../components/PaletteList';

export const Home = () => {
  return (
    <View>
      <FlatList
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item: { paletteName, colors } }) => (
          <PaletteList paletteName={paletteName} colors={colors} />
        )}
      />
    </View>
  );
};
