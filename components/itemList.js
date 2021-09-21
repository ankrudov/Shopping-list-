import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const ListItem = ({item, deleteItem})=> {
    return(
        <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}> 
                <Text style={styles.itemText}>{item.text}</Text>
                <Icon 
                    name='trash-o'
                    type='font-awesome'
                    color='red'
                    onPress={()=> deleteItem(item.id)}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        padding:10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth:1,
        borderColor: '#9c5757',
    },
    itemView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemText:{
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
    }

})


export default ListItem;