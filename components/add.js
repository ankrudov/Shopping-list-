import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const AddItem = ({title,addItem})=> {
    const [list, setList] = useState('');

    const onChange = (value) => setList(value);
    

    return(
        <View style={styles.addItem}>
            <TextInput style={styles.itemInput} placeholder="Add an item" onChangeText={onChange}/>
            <TouchableOpacity style={styles.itemBtn} onPress={()=> addItem(list)}>
                <Text style={styles.btnText}>
                    <Icon
                        name="plus"
                        type='font-awesome'
                        color='green'
                        size={10}
                    /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addItem:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:4,
    },
    itemInput:{
        height:50,
        padding:7,
    },
    itemBtn:{
        backgroundColor:'#baf9a2',
        padding:8,
        margin:5,
        borderRadius: 50,
    },
    btnText:{
        color: 'black',
        fontSize: 15,
        fontFamily: 'sans-serif'
    }
})

export default AddItem;