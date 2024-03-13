import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { useState } from 'react';
import exercises from '../../assets/data/exercises.json';

export default function ExerciseDetailsScreen() {
  const [seeMoreInfo, setSeeMoreInfo] = useState(false);
  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === params.name);
  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.exerciseContainer}>
      <Stack.Screen options={{ title: exercise.name }} />
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <View style={styles.exerciseWrap}>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.exerciseSubValue}>{exercise.muscle}</Text> |{' '}
          <Text style={styles.exerciseSubValue}>{exercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.exerciseWrap}>
        <Text style={styles.exerciseInstructions} numberOfLines={seeMoreInfo ? 0 : 3}>
          {exercise.instructions}
        </Text>
        <Text onPress={() => setSeeMoreInfo(!seeMoreInfo)} style={styles.exerciseMoreInfo}>
          {seeMoreInfo ? 'See less' : 'See more'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    padding: 10,
    gap: 10,
  },

  exerciseWrap: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },

  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgrey',
  },

  exerciseSubValue: {
    textTransform: 'capitalize',
  },
  exerciseInstructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  exerciseMoreInfo: {
    alignSelf: 'center',
    padding: 10,
    fontWeight: '600',
    color: 'grey',
  },
});
