import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; //온보딩 여부 저장

import OnboardingScreen from '../OnboardingScreen';
import LoginScreen from '../LoginScreen';
// import RegisterScreen from '../RegisterScreen';
// import RegisterCompleteScreen from '../RegisterCompleteScreen';
// import EmailVerificationScreen from '../EmailVerificationScreen';
import HomeScreen from '../HomeScreen';
// import MapScreen from '../MapScreen';
// import ChatScreen from '../ChatScreen';

const Stack = createStackNavigator(); // 화면 간 이동

export default function MainNavigator() {
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkOnboarding() {
      const value = await AsyncStorage.getItem('hasOnboarded');
      setIsOnboarded(value === 'true');
    }
    checkOnboarding();
  }, []);

  if (isOnboarded === null) {
    // 로딩 중일 때 아무것도 안 보여주거나 스플래시 화면 띄우기 가능
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isOnboarded ? (
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          initialParams={{ setIsOnboarded }} 
        />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RegisterComplete" component={RegisterCompleteScreen} />
          <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} /> */}
        </>
      )}
    </Stack.Navigator>
  );
}
