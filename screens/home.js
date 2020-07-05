import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, RefreshControl, TouchableOpacity, Text } from 'react-native';
import PalettePreview from '../comp/palettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';



const Home = ({ navigation, route }) => {
    const newColorPalette = route.params ? route.params.newColorPalette : undefined;

    const [palettes, setPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleFetchPalettes = useCallback(async () => {
        const response = await fetch(URL);
        if (response.ok) {
            const palettes = await response.json();
            setPalettes(palettes);
        }
    }, []);

    useEffect(() => {
        handleFetchPalettes();
    }, []);
    useEffect(() => {
        if (newColorPalette) {
            setPalettes(palettes => [newColorPalette, ...palettes])
        }
    }, [newColorPalette]);


    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await handleFetchPalettes();
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    });

    return (
        <FlatList
            style={styles.list}
            data={palettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    onPress={() => navigation.push('ColorPalette', item)}
                    palette={item}
                />
            )}
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}
                />

            }

            ListHeaderComponent={<TouchableOpacity onPress={() => { navigation.navigate('ColorPalleteModal'); }}>
                <Text style={styles.buttonText}>  Make your own color scheme  </Text></TouchableOpacity>}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    }, buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'teal',
        marginBottom: 10
    }
});

export default Home;