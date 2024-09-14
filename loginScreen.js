import React, { useState } from 'react';
import { Image, View, Text, TextInput,  TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CMCLogo from './assets/LogoCmc.png';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const correctPhoneNumber = '0947873212';
  const correctPassword = '1234';

  const handleLogin = () => {
    if (phone === correctPhoneNumber && password === correctPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Lỗi', 'Sai mật khẩu, vui lòng thử lại');
    }
  };

  const handlePhoneChange = (text) => {
    // Xóa các ký tự không phải số từ đầu vào điện thoại
    let cleaned = text.replace(/[^0-9]/g, '').slice(0, 10);
    setPhone(cleaned);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={CMCLogo}></Image>
        <Text style={styles.tagline}>CMC University</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
          placeholderTextColor="#888"
          value={phone}
          onChangeText={handlePhoneChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          placeholderTextColor="#888"
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  tagline: {
    fontSize: 27,
    color: '#018ED5',
    marginTop: 0,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  forgotPasswordButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007BFF',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});