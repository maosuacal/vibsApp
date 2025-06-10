import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {AuthFetcher} from '../../../config/adapters/auth.adapter';
import {useUserLogin} from '../../hooks/useUserLogin';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loginUser, error} = useUserLogin(AuthFetcher);

  const handleLogin = async () => {
    const result = await loginUser(email, password);
    if (result) {
      Alert.alert('Inicio de sesión exitoso', `Bienvenido ${result.username}`);
      // Aquí podrías navegar a otra pantalla
    } else {
      Alert.alert('Error', error || 'No se pudo iniciar sesión');
    }
  };

  return (
    <LinearGradient colors={['#cf23cf', '#6f00ff']} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.innerContainer}>
        <Text style={styles.title}>VIBS</Text>
        <Text style={styles.subtitle}>
          Tu programa de fidelización inteligente
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#fff8"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#fff8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccount}>
          <Text style={styles.createText}>Crear Cuenta Nueva</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#0006',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffffff66',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#fcb900',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  createAccount: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  createText: {
    color: '#fff',
    fontWeight: '600',
  },
});
