import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const messages = [
  {
    id: '1',
    title: 'Tin nhắn từ giáo viên',
    content: 'Đừng quên hoàn thành bài tập về nhà.',
    time: '10:30 AM',
  },
  {
    id: '2',
    title: 'Thông báo lịch học',
    content: 'Lịch học tuần tới đã được cập nhật.',
    time: '9:15 AM',
  },
  {
    id: '3',
    title: 'Thông báo sự kiện',
    content: 'Hội thảo về kỹ năng mềm vào thứ Bảy này.',
    time: '8:00 AM',
  },
];

const InboxScreen = () => {
  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageContainer}>
      <Text style={styles.messageTitle}>{item.title}</Text>
      <Text style={styles.messageContent}>{item.content}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tin nhắn</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9f5fc', 
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', 
  },
  messageContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5, 
    shadowColor: '#000',
     
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  messageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff', // Màu tiêu đề tin nhắn
  },
  messageContent: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
    textAlign: 'right', // Căn phải cho thời gian
  },
});

export default InboxScreen;