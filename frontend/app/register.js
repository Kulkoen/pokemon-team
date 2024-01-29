import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import axios from "axios";

export default function RegisterPage({ props }) {
	const [name, setName] = useState("");
	const [nameVerify, setNameVerify] = useState(false);

	const [email, setEmail] = useState("");
	const [emailVerify, setEmailVerify] = useState(false);

	const [password, setPassword] = useState("");
	const [passwordVerify, setPasswordVerify] = useState(false);

	function handleRegistration() {
		const userData = { name: name, email, password };
		axios
			.post("http://172.22.4.217:5000/register", userData)
			.then((res) => console.log(res.data))
			.catch((e) => console.log(e));
	}

	function handleName(e) {
		const nameVar = e.nativeEvent.text;
		setName(nameVar);
		setNameVerify(false);
		if (nameVar.length > 1) {
			setNameVerify(true);
		}
	}

	function handleEmail(e) {
		// console.log(e.nativeEvent.text);
		const emailVar = e.nativeEvent.text;
		setEmail(emailVar);
		setEmailVerify(false);
		if (/^[\w.%+-]+@[\w.-]+\.[a-zA-z]{1,}$/.test(emailVar)) {
			setEmail(emailVar);
			setEmailVerify(true);
		}
	}

	function handlePass(e) {
		// console.log(e.nativeEvent.text);
		const passwordVar = e.nativeEvent.text;
		setPassword(passwordVar);
		setPasswordVerify(false);
		if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
			setPassword(passwordVar);
			setPasswordVerify(true);
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Name"
					placeholderTextColor="#003f5c"
					onChange={(e) => handleName(e)}
				/>
			</View>
			{name.length < 1 ? null : nameVerify ? null : (
				<Text style={{ color: "red" }}>Name must be more than 1 character</Text>
			)}
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Email"
					placeholderTextColor="#003f5c"
					onChange={(e) => handleEmail(e)}
				/>
			</View>
			{email.length < 1 ? null : emailVerify ? null : (
				<Text style={{ color: "red" }}>Email must be valid</Text>
			)}
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					secureTextEntry
					placeholder="Password"
					placeholderTextColor="#003f5c"
					onChange={(e) => handlePass(e)}
				/>
			</View>
			{password.length < 1 ? null : passwordVerify ? null : (
				<Text style={{ color: "red" }}>
					Password must contain Uppercase and Lowercase and must be 6 or more
					characters{" "}
				</Text>
			)}
			<TouchableOpacity
				onPress={() => handleRegistration()}
				style={styles.registerBtn}>
				<Text style={styles.loginText}>REGISTER</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Link href="/">
					<Text style={styles.inputText}>Sign In</Text>
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
	registerBtn: {
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
