import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import các màn hình của bạn
import LoginScreen from './loginScreen';
import CheckScreen from './checkScreen';
import TabNavigator from './TabNavigator';
import ProfileScreen from './profileScreen';
import ScheduleDetailScreen from './scheduledetailScreen';
import GradeReportScreen from './gradereportScreen';
import DailyActivity from './dailyactivityScreen';
import disciplineScreen from './disciplineScreen';
import mailScreen from './mailScreen';

// Khởi tạo Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Check" 
          component={CheckScreen} 
          options={{ title: 'Điểm danh học sinh' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Schedule"
          component={ScheduleDetailScreen}
          options={{title: 'Kế hoạch giảng dạy'}}
        />
        <Stack.Screen
          name="Gradereport"
          component={GradeReportScreen}
          options={{title: 'Bảng điểm'}}
        />
        <Stack.Screen
          name="Dailyactivity"
          component={DailyActivity}
          options={{title: 'Hoạt động hàng ngày'}}
        />
        <Stack.Screen
          name="Discipline"
          component={disciplineScreen}
          options={{title: 'Đánh giá hạnh kiểm'}}
        />
        <Stack.Screen
          name="Mail"
          component={mailScreen}
          options={{title: 'Sổ liên lạc điện tử'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
