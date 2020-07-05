import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../comp/colorBox';
import Clipboard from '@react-native-community/clipboard';


const ColorPalette = ({ route }) => {
    const { colors } = route.params;

    return (
        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => (
                <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
});

export default ColorPalette;