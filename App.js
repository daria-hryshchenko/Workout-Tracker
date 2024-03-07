import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseListItem from './src/components/ExerciseListItem';

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.wrap}
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,
  },
  wrap: {
    gap: 10,
  },
});
