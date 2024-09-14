import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const students = [
  { id: '1', name: 'Lê Ngọc An', grades: { Toán: 8, Văn: 7, Anh: 9, Lý: 6, Hóa: 7, Sinh: 8 } },
  { id: '2', name: 'Nguyễn Hà An', grades: { Toán: 5, Văn: 6, Anh: 5, Lý: 7, Hóa: 6, Sinh: 5 } },
  { id: '3', name: 'Hà Nhật Anh', grades: { Toán: 9, Văn: 8, Anh: 10, Lý: 9, Hóa: 10, Sinh: 9 } },
  { id: '4', name: 'Trần Minh Bảo', grades: { Toán: 6, Văn: 7, Anh: 8, Lý: 5, Hóa: 6, Sinh: 7 } },
  { id: '5', name: 'Phạm Thị Cẩm', grades: { Toán: 7, Văn: 8, Anh: 7, Lý: 6, Hóa: 8, Sinh: 9 } },
  { id: '6', name: 'Nguyễn Khánh Duy', grades: { Toán: 8, Văn: 9, Anh: 9, Lý: 7, Hóa: 6, Sinh: 8 } },
  { id: '7', name: 'Lê Hoàng Gia', grades: { Toán: 5, Văn: 6, Anh: 5, Lý: 8, Hóa: 7, Sinh: 6 } },
  { id: '8', name: 'Trần Bảo Hoa', grades: { Toán: 9, Văn: 10, Anh: 9, Lý: 8, Hóa: 10, Sinh: 9 } },
  { id: '9', name: 'Phạm Thu Hương', grades: { Toán: 6, Văn: 6, Anh: 7, Lý: 6, Hóa: 5, Sinh: 5 } },
  { id: '10', name: 'Nguyễn Văn Hưng', grades: { Toán: 8, Văn: 7, Anh: 8, Lý: 9, Hóa: 8, Sinh: 7 } },
  { id: '11', name: 'Đào Thị Huyền', grades: { Toán: 7, Văn: 8, Anh: 9, Lý: 6, Hóa: 7, Sinh: 8 } },
  { id: '12', name: 'Bùi Quang Khải', grades: { Toán: 6, Văn: 5, Anh: 6, Lý: 7, Hóa: 8, Sinh: 6 } },
  { id: '13', name: 'Nguyễn Duy Linh', grades: { Toán: 9, Văn: 10, Anh: 9, Lý: 8, Hóa: 9, Sinh: 10 } },
  { id: '14', name: 'Trần Thùy Mai', grades: { Toán: 5, Văn: 6, Anh: 5, Lý: 6, Hóa: 7, Sinh: 5 } },
  { id: '15', name: 'Lê Thanh Nhân', grades: { Toán: 8, Văn: 9, Anh: 10, Lý: 8, Hóa: 9, Sinh: 9 } },
  { id: '16', name: 'Phan Thị Ngọc', grades: { Toán: 7, Văn: 6, Anh: 7, Lý: 5, Hóa: 6, Sinh: 7 } },
  { id: '17', name: 'Nguyễn Hoàng Phúc', grades: { Toán: 6, Văn: 7, Anh: 8, Lý: 9, Hóa: 8, Sinh: 6 } },
  { id: '18', name: 'Trần Bích Quỳnh', grades: { Toán: 9, Văn: 8, Anh: 7, Lý: 10, Hóa: 9, Sinh: 8 } },
  { id: '19', name: 'Phạm Duy Tấn', grades: { Toán: 8, Văn: 7, Anh: 8, Lý: 6, Hóa: 7, Sinh: 9 } },
  { id: '20', name: 'Nguyễn Thị Vân', grades: { Toán: 5, Văn: 6, Anh: 5, Lý: 5, Hóa: 6, Sinh: 5 } },
];

const GradeScreen = () => {
  const renderStudentGrades = ({ item }) => (
    <View style={styles.studentContainer}>
      <Text style={styles.studentName}>{item.name}</Text>
      <FlatList
        data={Object.entries(item.grades)}
        keyExtractor={([subject]) => subject}
        renderItem={({ item }) => (
          <View style={styles.gradeContainer}>
            <Text style={styles.subjectText}>{item[0]}</Text>
            <Text style={styles.gradeText}>{item[1]}</Text>
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bảng điểm</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderStudentGrades}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    textDecorationLine: 'underline',
  },
  studentContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  studentName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  gradeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  subjectText: {
    fontSize: 16,
    color: '#555',
  },
  gradeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
});

export default GradeScreen;