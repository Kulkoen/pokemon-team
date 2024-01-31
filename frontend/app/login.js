import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import axios from "axios";

export default function LoginPage({}) {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin() {
		console.log(email, password);
		const userData = { email: email, password };
		axios
			.post("http://128.61.125.103:5000/login-user", userData)
			.then((res) => {
				console.log(res.data);
				if (res.data.status == "OK") {
					Alert.alert("Logged In Successful");
					router.push("/app");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}> Login Screen</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Email"
					placeholderTextColor="#003f5c"
					onChange={(e) => setEmail(e.nativeEvent.text)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					secureTextEntry
					placeholder="Password"
					placeholderTextColor="#003f5c"
					onChange={(e) => setPassword(e.nativeEvent.text)}
				/>
			</View>
			<TouchableOpacity onPress={() => handleLogin()} style={styles.loginBtn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Link href="/register">
					<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
				</Link>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF8EF",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 50,
		color: "#a552fa",
		marginBottom: 40,
	},
	inputView: {
		width: "80%",
		backgroundColor: "#d6e3f2",
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: "center",
		padding: 20,
	},
	inputText: {
		height: 50,
		color: "black",
	},
	forgotAndSignUpText: {
		color: "black",
		fontSize: 11,
	},
	loginBtn: {
		width: "80%",
		backgroundColor: "#f78b0a",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
		marginBottom: 10,
	},
});
