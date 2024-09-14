import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>H</Text>
        </View>
        <Text style={styles.name}>Nguyễn Minh Hoàng</Text>
        <Text style={styles.role}>Giáo viên</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.infoItem}>
          <View style={styles.infoIcon}>
            <Icon name="person-outline" size={24} color="#4caf50" />
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Thông tin tài khoản</Text>
            <Text style={styles.infoSubtitle}>Cập nhật thông tin</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoItem}>
          <View style={styles.infoIcon}>
            <Icon name="information-circle-outline" size={24} color="#ff9800" />
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Phiên bản</Text>
            <Text style={styles.infoSubtitle}>26.7</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoItem}>
          <View style={styles.infoIcon}>
            <Icon name="star-outline" size={24} color="#ffeb3b" />
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Đánh giá </Text>
            <Text style={styles.infoSubtitle}>Đánh giá CMC University</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoItem}>
          <View style={styles.infoIcon}>
            <Icon name="mail-outline" size={24} color="#4caf50" />
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Gửi góp ý</Text>
            <Text style={styles.infoSubtitle}>Góp ý cho nhà phát triển</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate('Login')}>
          <View style={styles.infoIcon}>
          <Icon name="log-out-outline" size={24} color="#f44336" />
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 40,
    marginLeft: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#8bc34a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 32,
    color: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#757575',
  },
  infoContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoIcon: {
    marginRight: 20,
  },
  infoText: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#757575',
  },
});

export default ProfileScreen;