import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props)=> {
    return(
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'red',
        height:60,
        padding: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white',
        fontSize: 15,
        paddingTop: 25,
    }
})

export default Header;