import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Tag from './Tag';
const TagSelector = ( { defaultColor, selectedColor, tags, setCount }) => {
    const[ selectedItems, setSelectedItems ] = useState([]);

    const handlePress = id => {
        if ( ! selectedItems.includes( id ) ) {
            setSelectedItems( prev => [ ...prev, id ] );
            setCount( prev => prev+1 );
            return
        } else {
            setSelectedItems( prev => prev.filter( el => el !== id ) );
            setCount( prev => prev-1 );
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tags}
                renderItem={ ({ item }) => (
                    <Tag 
                        title={item.title}
                        backgroundColor={selectedItems.includes(item.id) ? selectedColor : defaultColor}
                        onPress={() => { handlePress(item.id)} }
                        setCount={setCount}
                    />
                 )
                }
                keyExtractor={item => item.title}
                numColumns={4}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    }
});


export default TagSelector;
