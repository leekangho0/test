import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* 앱 로고 자리 */}
      <Text style={styles.logoText}>여기에는 앱 로고 넣을 예정?</Text>

      {/* 이메일 입력 */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      {/* 비밀번호 입력 */}
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* 비밀번호 찾기 */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* 로그인 버튼 */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>

      {/* Google 로그인 버튼 */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Google 로그인</Text>
      </TouchableOpacity>

      {/* 회원가입 네비게이션 */}
      <Text style={styles.registerText}>
        Not a member?
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Register Now
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logoText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#666',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FDCB58',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#000',
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    color: '#666',
  },
  googleButton: {
    backgroundColor: '#DB4437',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  googleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    color: '#666',
  },
  registerLink: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
