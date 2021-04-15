import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

import { PaletteList } from '../components/PaletteList';

export const Home = () => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColors = async () => {
    try {
      setIsRefreshing(true);
      console.log('refreshes');
      const result = await fetch(
        'https://color-palette-api.kadikraman.now.sh/palettes',
      );
      const palettes = await result.json();

      setColorPalettes(palettes);
      setIsRefreshing(false);
    } catch (e) {
      console.log(e);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => getColors();

  useEffect(() => {
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
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        // refreshControl={
        //   <RefreshControl refreshing={true} onRefresh={() => {}} />
        // }
      />
    </View>
  );
};
