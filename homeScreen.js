import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import CMCLogo from './assets/LogoCmc.png';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={CMCLogo} style={styles.logo} />
      </View>
      <Text style={styles.title}>CMC University</Text>
      <View style={styles.functionsContainer}>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.functionButton}
            onPress={() => navigation.navigate('Dailyactivity')}>
            <Icon name="accessibility-outline" size={25} color="#018ED5" style={styles.icon} />
            <Text style={styles.text}>Hoạt động hằng ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.functionButton}
            onPress={() => navigation.navigate('Check')}>
            <Icon name="checkmark-circle-outline" size={25} color="#018ED5" style={styles.icon} />
            <Text style={styles.text}>Điểm danh học sinh</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.functionButton}
            onPress={() => navigation.navigate('Discipline')}>
            <Icon name="school-outline" size={25} color="#018ED5" style={styles.icon} />
            <Text style={styles.text}>Đánh giá hạnh kiểm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.functionButton}
            onPress={() => navigation.navigate('Schedule')}>
            <Icon name="calendar-outline" size={25} color="#018ED5" style={styles.icon} />
            <Text style={styles.text}>Kế hoạch giảng dạy</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.functionButton}
            onPress={() => navigation.navigate('Gradereport')}>
            <Icon name="clipboard-outline" size={25} color="#018ED5" style={styles.icon} />
            <Text style={styles.text}>Bảng điểm</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.functionButton}
            onPress={() => navigation.navigate('Mail')}>
            <Icon name="mail-open-outline" size={25} color="#018ED5" style={styles.icon} />
            <Text style={styles.text}>Sổ liên lạc điện tử</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.highlightText}>Ảnh nổi bật</Text>
      <Swiper 
        style={styles.swiperContainer} 
        autoplay={true}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}>
        <View style={styles.slide}>
          <Image source={require('./assets/CNTT1.jpg')} style={styles.slideImage} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/CNTT2.jpg')} style={styles.slideImage} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/CNTT5.jpg')} style={styles.slideImage} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/CNTT4.jpg')} style={styles.slideImage} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#018ED5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  functionsContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  functionButton: {
    width: '30%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  icon: {
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  swiperContainer: {
    height: 200,
    marginTop: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  paginationStyle: {
    bottom: 10, 
  },
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDotStyle: {
    backgroundColor: '#018ED5',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  highlightText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#018ED5',
    marginLeft: 20, 
  }
});

export default HomeScreen;
