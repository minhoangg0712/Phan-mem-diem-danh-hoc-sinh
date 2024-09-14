import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';

const students = [
  { id: '1', name: 'Lê Ngọc An' },
  { id: '2', name: 'Nguyễn Hà An' },
  { id: '3', name: 'Hà Nhật Anh' },
  { id: '4', name: 'Trần Minh Bảo' },
  { id: '5', name: 'Phạm Thị Cẩm' },
  { id: '6', name: 'Nguyễn Khánh Duy' },
  { id: '7', name: 'Lê Hoàng Gia' },
  { id: '8', name: 'Trần Bảo Hoa' },
  { id: '9', name: 'Phạm Thu Hương' },
  { id: '10', name: 'Nguyễn Văn Hưng' },
  { id: '11', name: 'Đào Thị Huyền' },
  { id: '12', name: 'Bùi Quang Khải' },
  { id: '13', name: 'Nguyễn Duy Linh' },
  { id: '14', name: 'Trần Thùy Mai' },
  { id: '15', name: 'Lê Thanh Nhân' },
  { id: '16', name: 'Phan Thị Ngọc' },
  { id: '17', name: 'Nguyễn Hoàng Phúc' },
  { id: '18', name: 'Trần Bích Quỳnh' },
  { id: '19', name: 'Phạm Duy Tấn' },
  { id: '20', name: 'Nguyễn Thị Vân' },
];

const DisciplineInputScreen = () => {
  const [conducts, setConducts] = useState({});

  const toggleConduct = (studentId, level) => {
    console.log(`Toggling ${studentId} level: ${level}`);
    setConducts(prev => {
      const newConducts = { ...prev };
      newConducts[studentId] = newConducts[studentId] || {};
      newConducts[studentId][level] = !newConducts[studentId][level];
      console.log(newConducts); // Kiểm tra trạng thái
      return newConducts;
    });
  };

  const handleSubmit = () => {
    const results = Object.entries(conducts)
      .map(([id, levels]) => {
        const student = students.find(s => s.id === id);
        const statuses = Object.keys(levels)
          .filter(level => levels[level])
          .join(', ');
        return `${student.name}: ${statuses || 'Chưa ghi nhận hạnh kiểm'}`;
      });

    Alert.alert('Kết quả hạnh kiểm', results.join('\n'));
  };

  const renderStudentItem = ({ item }) => (
    <View style={styles.studentContainer}>
      <Text style={styles.studentName}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        {['Giỏi', 'Khá', 'Yếu'].map(level => (
          <TouchableOpacity
            key={level}
            style={[styles.button, conducts[item.id]?.[level] && styles.buttonActive]}
            onPress={() => toggleConduct(item.id, level)}
          >
            <Text style={styles.buttonText}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Đánh giá hạnh kiểm</Text>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={renderStudentItem}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9ecef',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#212529',
  },
  studentContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  studentName: {
    fontSize: 22,
    marginBottom: 10,
    color: '#495057',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#adb5bd',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonActive: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default DisciplineInputScreen;