import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ScheduleScreen = () => {
  const scheduleData = [
    { time: '08:00', subjects: ['Toán Phòng 3141', '', '', '', ''] },
    { time: '09:00', subjects: ['', '', '', '', 'Toán Phòng 3141'] },
    { time: '10:00', subjects: ['', '', 'Hóa học Phòng thí nghiệm 2', '', ''] },
    { time: '11:00', subjects: ['', 'Toán Phòng 3141', '', '', ''] },
    { time: '12:00', subjects: ['Toán Phòng 3141', '', '', 'Hóa học Phòng thí nghiệm 2', ''] },
    { time: '13:00', subjects: ['', '', '', '', ''] },
    { time: '14:00', subjects: ['Hóa học Phòng thí nghiệm 2', '', '', 'Toán Phòng 3141', ''] },
    { time: '15:00', subjects: ['', '', 'Toán Phòng 3141', '', ''] },
    { time: '16:00', subjects: ['', '', '', '', 'Hóa học Phòng thí nghiệm 2'] },
    { time: '17:00', subjects: ['Toán Phòng 3141', '', 'Hóa học Phòng thí nghiệm 2', '', ''] },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.time}</Text>
      {item.subjects.map((subject, index) => (
        <View key={index} style={[styles.cell, subject ? styles.cellFilled : styles.cellEmpty]}>
          <Text style={styles.subjectText}>{subject}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lịch giảng dạy</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Time</Text>
          <Text style={styles.headerCell}>Mon</Text>
          <Text style={styles.headerCell}>Tue</Text>
          <Text style={styles.headerCell}>Wed</Text>
          <Text style={styles.headerCell}>Thu</Text>
          <Text style={styles.headerCell}>Fri</Text>
        </View>
        <FlatList
          data={scheduleData}
          renderItem={renderItem}
          keyExtractor={(item) => item.time}
          contentContainerStyle={{ paddingBottom: 60 }} // Tăng thêm khoảng cách dưới cùng
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Your School Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#018ED5',
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#018ED5',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cellFilled: {
    backgroundColor: '#4CAF50',
  },
  cellEmpty: {
    backgroundColor: '#f8f8f8',
  },
  subjectText: {
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#018ED5',
    marginTop: 20,
    borderRadius: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ScheduleScreen;