// 인증 여부에 따라 분기 처리해서 홈 UI 다르게 보여줌

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.greeting}>안녕하세요, 수민님</Text>
        <Text style={styles.subtitle}>오늘의 냉장고에는 무엇이 있나요?</Text>
        <View style={styles.iconRow}>
          <Image source={require('../assets/icons/soup.png')} style={styles.icon} />
          <Image source={require('../assets/icons/jar.png')} style={styles.icon} />
          <Image source={require('../assets/icons/water.png')} style={styles.icon} />
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>식품 등록하기</Text>
        </TouchableOpacity>
      </View>

      {/* 진행 중인 거래 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>정을 나누고 있는 냉장고</Text>
        <Text style={styles.subTitle}>진행 중인 거래</Text>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image source={require('../assets/images/vegetable.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>물이랑 채소랑</Text>
            <Text style={styles.cardDesc}>7.10일에 교환하기로 했어요!</Text>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/images/frozen.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>냉동식품</Text>
            <Text style={styles.cardDesc}>7.16일에 나눔 하기로 했어요!</Text>
          </View>
        </View>
      </View>

      {/* 냉장고 나눔 후기 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>혼자보다는 함께</Text>
        <Text style={styles.subTitle}>냉장고 나눔 후기</Text>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image source={require('../assets/images/apple.png')} style={styles.cardImage} />
            <Text style={styles.tag}>#과일</Text>
            <Text style={styles.cardTitle}>사과 나눔 했어요</Text>
            <Text style={styles.cardDate}>06.27</Text>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/images/pizza.png')} style={styles.cardImage} />
            <Text style={styles.tag}>#냉동식품</Text>
            <Text style={styles.cardTitle}>냉동피자 나눔 받았어요</Text>
            <Text style={styles.cardDate}>06.24</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    padding: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: '#555',
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around',
  },
  icon: {
    width: 60,
    height: 60,
  },
  registerButton: {
    backgroundColor: '#6788f3',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    color: '#7b6ee6',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  cardDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  cardDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#e5e6f3',
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    marginBottom: 6,
  },
});

export default HomeScreen;
