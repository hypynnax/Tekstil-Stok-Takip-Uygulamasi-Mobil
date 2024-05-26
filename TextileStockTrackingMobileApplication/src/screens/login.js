import * as React from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { signUp } from '../../loginProcess'


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showErrorMessage, setShowErrorMessage] = React.useState('');

  const Login = () => {
    var response = signUp(email, password);
    if (response) {
      navigation.navigate('Main');
      setShowErrorMessage('');
    } else {
      if (response == 0) {
        setShowErrorMessage('That email address is invalid!');
      }
=======
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);

  const Login = () => {
    if (true) {
      navigation.navigate('Main');
    } else {
      setShowErrorMessage(true);
>>>>>>> origin/master
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
<<<<<<< HEAD
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
=======
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
>>>>>>> origin/master
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Password Reset')}>
=======
        <TouchableOpacity onPress={() => navigation.navigate('Send Mail')}>
>>>>>>> origin/master
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUp}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      {showErrorMessage && (
        <View style={styles.alertContainer}>
<<<<<<< HEAD
          <Text style={styles.alertText}>{showErrorMessage}</Text>
=======
          <Text style={styles.alertText}>This is a warning message!</Text>
>>>>>>> origin/master
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  button: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#777777',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dontHaveAccount: {
    color: '#000',
  },
  signUp: {
    color: '#007bff',
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffeeee',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  alertText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'red',
  },
});

export default LoginScreen;
