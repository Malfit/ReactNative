import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] =  useState('');

    return (
        <>
            <View>
                <Text>Enter Name:</Text>
                <TextInput 
                    style={styles.input} 
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={name}
                    onChangeText={newValue => setName(newValue)}
                />
                <Text>Your name is {name}</Text>
            </View>
            <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            { password.length < 5
            ? <Text>Opss.. Your password is less then 5 symbols</Text>
            : <Text>Great! Your password is {password}</Text> }
            
                
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
