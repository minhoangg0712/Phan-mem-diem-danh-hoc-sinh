import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

const notifications = [
  {
    id: '1',
    sender: 'CMC University',
    role: 'Phòng công tác sinh viên',
    content: 'Thông báo về lịch học mới.',
    time: '30 Thg 7',
  },
  {
    id: '2',
    sender: 'CMC University',
    role: 'Hiệu trưởng',
    content: 'Thông báo về hoạt động ngoại khóa.',
    time: '7 Thg 7',
  },
  {
    id: '3',
    sender: 'CMC University',
    role: 'Hiệu trưởng',
    content: 'Kính gửi',
    time: '2 Thg 7',
  },
  {
    id: '4',
    sender: 'CMC University',
    role: 'Phòng công tác sinh viên',
    content: 'Kỷ niệm 70 năm chiến thắng Điện Biên Phủ.',
    time: '4 Thg 6',
  },
  {
    id: '5',
    sender: 'CMC University',
    role: 'Hiệu trưởng',
    content: 'Thông báo về sự kiện sắp tới.',
    time: '26 Thg 4',
  },
  {
    id: '6',
    sender: 'CMC University',
    role: 'Hiệu trưởng',
    content: 'Thông báo nghỉ lễ 30/4 và 1/5.',
    time: '15 Thg 4',
  },
  {
    id: '7',
    sender: 'CMC University',
    role: 'Hiệu trưởng',
    content: 'Thông báo về chương trình học bổng.',
    time: '5 Thg 4',
  },
  {
    id: '8',
    sender: 'CMC University',
    role: 'Hiệu trưởng',
    content: 'Cập nhật về quy định mới.',
    time: '25 Thg 3',
  },
  {
    id: '9',
    sender: 'CMC University',
    role: 'Phòng công tác sinh viên',
    content: 'Thông báo về buổi họp phụ huynh.',
    time: '12 Thg 3',
  },
  {
    id: '10',
    sender: 'CMC University',
    role: 'Hiệu trưởng',
    content: 'Kính mời tham dự lễ khai giảng.',
    time: '1 Thg 9',
  },
];

const NotificationScreen = () => {
  const renderNotification = ({ item }) => (
    <TouchableOpacity style={styles.notificationContainer}>
      <Text style={styles.notificationSender}>{item.sender}</Text>
      <Text style={styles.notificationRole}>{item.role}</Text>
      <Text style={styles.notificationContent}>{item.content}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Thông báo</Text>
      <TextInput 
        style={styles.searchInput} 
        placeholder="Tìm kiếm" 
        placeholderTextColor="#aaa"
      />
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', // Thay đổi màu nền cho nhẹ nhàng hơn
  },
  headerText: {
    fontSize: 30, // Tăng kích thước tiêu đề
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    height: 45,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  notificationContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3, // Giảm độ nổi
    shadowColor: '#aaa', // Màu bóng nhẹ nhàng
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  notificationSender: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  notificationRole: {
    fontSize: 12,
    color: '#555',
  },
  notificationContent: {
    fontSize: 14,
    marginTop: 5,
    color: '#333',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
    textAlign: 'right',
  },
});

export default NotificationScreen;