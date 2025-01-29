import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import levels from '../data/levels.json';

const LevelSelectionScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.levelItem}>
      <Text style={styles.levelTitle}>{item.title}</Text>
      <Button
        title="Start Level"
        onPress={() => navigation.navigate('Level', { level: item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={levels}
        renderItem={renderItem}
        keyExtractor={(item) => item.level.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  levelItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default LevelSelectionScreen;