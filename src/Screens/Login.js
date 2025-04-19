import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPd, setConfirmPd] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!name || !email || !password || !confirmPd) {
      Alert.alert("Error", "All fields are required");
    } else if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
    } else if (password !== confirmPd) {
      Alert.alert("Error", "Passwords do not match");
    } else {
      Alert.alert("Success", "Login Successful");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Login Page</Text>

        <View style={styles.inputContainer}>
          <Image source={require('../images/user.png')} style={styles.icon} />
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="#555"
            style={styles.input}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../images/email.png')} style={styles.icon} />
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#555"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../images/password.png')} style={styles.icon} />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#555"
            style={styles.input}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../images/password.png')} style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#555"
            style={styles.input}
            secureTextEntry
            onChangeText={setConfirmPd}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('Counter')}
        >
          <Text style={styles.floatingButtonText}>Task 2</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f2f6ff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ff6347",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  floatingButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
