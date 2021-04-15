import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import { PaletteList } from '../components/PaletteList';

export const Home = () => {
  const [colorPalettes, setColorPalettes] = useState([]);

  useEffect(() => {
    const getColors = async () => {
      try {
        const result = await fetch(
          'https://color-palette-api.kadikraman.now.sh/palettes',
        );
        const palettes = await result.json();
        console.log(palettes);
        setColorPalettes(palettes);
      } catch (e) {
        console.log(e);
      }
    };

    getColors();
  }, []);
  return (
    <View>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item: { paletteName, colors } }) => (
          <PaletteList paletteName={paletteName} colors={colors} />
        )}
      />
    </View>
  );
};
