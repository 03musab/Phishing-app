import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const LevelScreen = ({ route, navigation }) => {
  const { level } = route.params;
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isPhishing) => {
    if (isPhishing === level.scenarios[currentScenario].isPhishing) {
      setScore(score + 10); // Award 10 points for correct answer
    }

    if (currentScenario < level.scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      Alert.alert(
        'Level Completed',
        `Your score is ${score}/${level.scenarios.length * 10}`,
        [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scenarioText}>
        {level.scenarios[currentScenario].content}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Phishing" onPress={() => handleAnswer(true)} />
        <Button title="Not Phishing" onPress={() => handleAnswer(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  scenarioText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LevelScreen;