import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';


const ColorBox = props => {
    const colorStyle = {
        backgroundColor: props.hexCode,
    };

    const textStyle = {
        color:
            parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
                ? 'black'
                : 'white',
    };
    const r2d2 = colorStyle.backgroundColor;
    const writeToClipboard = async () => {
        await Clipboard.setString(`${r2d2}`);
        alert('Copied to Clipboard!');
    };


    return (
        <TouchableOpacity onPress={writeToClipboard}>
            <View style={[styles.box, colorStyle]}>
                <Text style={[styles.text, textStyle]}>
                    {props.colorName} {props.hexCode}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default ColorBox;