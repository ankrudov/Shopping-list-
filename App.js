import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/header';
import ListItem from './components/itemList';
import AddItem from './components/add';
import uuid from 'react-native-uuid'; //for unique ids

const App = ()=> {
  const [items, setItem] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Almond milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
  ]);

  const deleteItem = (id)=>{
    setItem(previousItems=>{
      return previousItems.filter(item=> item.id != id )
    });
  }
  return(
    <View>
      <Header title='Shopping list'/>
      <AddItem/>
      <FlatList
        data={items}
        renderItem={({item})=>(
          <ListItem item={item} deleteItem={deleteItem}/>
        )}
      />
    </View>
  );
}

export default App;