import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ navigation, route }) {
  const { setIsOnboarded } = route.params;

  const handleStart = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    setIsOnboarded(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>모두의 냉장고 시작하기</Text>
      <Button title="시작하기" onPress={handleStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
