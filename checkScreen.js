import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

const CheckScreen = () => {
  const classDate = '25/09/2021';  

  const [pendingStudents, setPendingStudents] = useState([
    { id: '1', name: 'Lê Ngọc An', status: '' },
    { id: '2', name: 'Nguyễn Hà An', status: '' },
    { id: '3', name: 'Hà Nhật Anh', status: '' },
    { id: '4', name: 'Trần Minh Bảo', status: '' },
    { id: '5', name: 'Phạm Thị Cẩm', status: '' },
    { id: '6', name: 'Nguyễn Khánh Duy', status: '' },
    { id: '7', name: 'Lê Hoàng Gia', status: '' },
    { id: '8', name: 'Trần Bảo Hoa', status: '' },
    { id: '9', name: 'Phạm Thu Hương', status: '' },
    { id: '10', name: 'Nguyễn Văn Hưng', status: '' },
    { id: '11', name: 'Đào Thị Huyền', status: '' },
    { id: '12', name: 'Bùi Quang Khải', status: '' },
    { id: '13', name: 'Nguyễn Duy Linh', status: '' },
    { id: '14', name: 'Trần Thùy Mai', status: '' },
    { id: '15', name: 'Lê Thanh Nhân', status: '' },
    { id: '16', name: 'Phan Thị Ngọc', status: '' },
    { id: '17', name: 'Nguyễn Hoàng Phúc', status: '' },
    { id: '18', name: 'Trần Bích Quỳnh', status: '' },
    { id: '19', name: 'Phạm Duy Tấn', status: '' },
    { id: '20', name: 'Nguyễn Thị Vân', status: '' }
  ]);

  const [approvedStudents, setApprovedStudents] = useState([]);

  const handlePress = (id, status) => {
    const updatedStudents = pendingStudents.map(student => {
      if (student.id === id) {
        return { ...student, status };
      }
      return student;
    });
    setPendingStudents(updatedStudents);
  };

  const approveStudent = (id) => {
    const studentToApprove = pendingStudents.find(student => student.id === id);
    if (!studentToApprove) return;

    setApprovedStudents([...approvedStudents, studentToApprove]);
    setPendingStudents(pendingStudents.filter(student => student.id !== id));
  };

  const renderItem = ({ item, section }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.name}</Text>
      <View style={styles.buttonsContainer}>
        {section.title === "Chờ duyệt" && (
          <Button title="Duyệt" onPress={() => approveStudent(item.id)} />
        )}
        <TouchableOpacity style={[styles.button, item.status === 'present' ? styles.activeButton : {}]} onPress={() => handlePress(item.id, 'present')}>
          <Text style={styles.buttonText}>Đi học</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, item.status === 'absent' ? styles.activeButton : {}]} onPress={() => handlePress(item.id, 'absent')}>
          <Text style={styles.buttonText}>Nghỉ CP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, item.status === 'unexcused' ? styles.activeButton : {}]} onPress={() => handlePress(item.id, 'unexcused')}>
          <Text style={styles.buttonText}>Nghỉ KP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{`Danh sách lớp`}</Text>
      <Text style={styles.sectionTitle}>Chờ Duyệt</Text>
      <FlatList
        data={pendingStudents}
        renderItem={(props) => renderItem({ ...props, section: { title: 'Chờ duyệt' } })}
        keyExtractor={item => item.id}
      />
      <Text style={styles.sectionTitle}>Đã Duyệt</Text>
      <FlatList
        data={approvedStudents}
        renderItem={(props) => renderItem({ ...props, section: { title: 'Đã duyệt' } })}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 20,
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,  
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', 
    marginTop: 5, 
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,  
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  buttonText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: '#00BFFF',
    color: '#FFFFFF',
  }
});

export default CheckScreen;