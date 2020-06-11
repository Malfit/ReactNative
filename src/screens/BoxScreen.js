import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}> Child #1 </Text>
            <Text style={styles.textTwoStyle}> Child #2 </Text>
            <Text style={styles.textThreeStyle}> Child #3 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        //borderWidth: 3,
        //borderColor: 'black',
        //alignItems: "flex-end",
        justifyContent: 'space-between', 
        flexDirection: "row",
        height: 300
 

    },
    textOneStyle: {
        width: 100,
        height: 100,
        borderWidth: 3, 
        borderColor: 'black',
        backgroundColor: 'red',
        flex: 3.3
    },
    textTwoStyle: {
        width: 100,
        height: 100,
        borderWidth: 3, 
        borderColor: 'black',
        backgroundColor: 'green',
        flex: 3.3,
        //alignSelf: "flex-start"
        //position: 'absolute',
        top: 100
        //bottom: 10
        //...StyleSheet.absoluteFillObject
        //marginTop: 100
    },
    textThreeStyle: {
        width: 100,
        height: 100,
        borderWidth: 3, 
        borderColor: 'black',
        backgroundColor: 'purple',
        flex: 3.3
    }
});

export default BoxScreen;
