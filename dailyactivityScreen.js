import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DailyActivity = () => {
  const [attendanceData, setAttendanceData] = useState({
    morning: 'Chưa điểm danh',
    afternoon: 'Chưa điểm danh',
    totalAbsentMonth: 0,
    absentCPMonth: 0,
    absentKPMonth: 0,
    totalAbsentYear: 0,
    absentCPYear: 0,
    absentKPYear: 0,
  });

  const [academicData, setAcademicData] = useState({
    academicResult: 'Chưa có kết quả học tập',
    teacherComment: 'Chưa có nhận xét của giáo viên',
  });

  const handleAttendancePress = () => {
    console.log('Attendance pressed!');
  };

  const handleAcademicPress = () => {
    console.log('Academic pressed!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.calendar}>
        <Text style={styles.calendarTitle}>THÁNG 8 2024</Text>
        <View style={styles.calendarDays}>
          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
            <Text key={day} style={styles.calendarDay}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.calendarDates}>
          {[26, 27, 28, 29, 30, 31, 1].map((date) => (
            <Text key={date} style={styles.calendarDate}>
              {date}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin hàng ngày</Text>
        <Text style={styles.sectionContent}>
          (Thứ Tư, ngày 28 tháng 8 năm 2024)
        </Text>
      </View>

      <TouchableOpacity style={styles.section} onPress={handleAttendancePress}>
        <Text style={styles.sectionTitle}>Điểm danh học sinh</Text>
        <View style={styles.attendance}>
          <Text style={styles.attendanceItem}>
            Sáng: <Text style={styles.attendanceStatus}>{attendanceData.morning}</Text>
          </Text>
          <Text style={styles.attendanceItem}>
            Chiều: <Text style={styles.attendanceStatus}>{attendanceData.afternoon}</Text>
          </Text>
          <View style={styles.attendanceSummary}>
            <Text style={styles.attendanceSummaryLabel}>Tổng số buổi nghỉ - Tháng 8</Text>
            <View style={styles.attendanceSummaryData}>
              <Text style={styles.attendanceSummaryValue}>
                {attendanceData.totalAbsentMonth}
              </Text>
              <Text style={styles.attendanceSummaryValue}>
                Nghỉ CP: {attendanceData.absentCPMonth}
              </Text>
              <Text style={styles.attendanceSummaryValue}>
                Nghỉ KP: {attendanceData.absentKPMonth}
              </Text>
            </View>
          </View>
          <View style={styles.attendanceSummary}>
            <Text style={styles.attendanceSummaryLabel}>Tổng số buổi nghỉ - Năm học</Text>
            <View style={styles.attendanceSummaryData}>
              <Text style={styles.attendanceSummaryValue}>
                {attendanceData.totalAbsentYear}
              </Text>
              <Text style={styles.attendanceSummaryValue}>
                Nghỉ CP: {attendanceData.absentCPYear}
              </Text>
              <Text style={styles.attendanceSummaryValue}>
                Nghỉ KP: {attendanceData.absentKPYear}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={handleAcademicPress}>
        <Text style={styles.sectionTitle}>Kết quả học tập</Text>
        <Text style={styles.sectionContent}>{academicData.academicResult}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={handleAcademicPress}>
        <Text style={styles.sectionTitle}>Nhận xét giáo viên</Text>
        <Text style={styles.sectionContent}>{academicData.teacherComment}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  calendar: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
    margin: 16,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  calendarDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  calendarDay: {
    fontSize: 14,
    color: '#555',
  },
  calendarDates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  calendarDate: {
    fontSize: 14,
    color: '#555',
  },
  section: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
    margin: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionContent: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
  attendance: {
    marginTop: 8,
  },
  attendanceItem: {
    fontSize: 14,
    color: '#333',
  },
  attendanceStatus: {
    color: 'red',
    fontWeight: 'bold',
  },
  attendanceSummary: {
    marginTop: 8,
  },
  attendanceSummaryLabel: {
    fontSize: 12,
    color: '#777',
  },
  attendanceSummaryData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  attendanceSummaryValue: {
    fontSize: 12,
    color: '#333',
  },
}); export default DailyActivity;