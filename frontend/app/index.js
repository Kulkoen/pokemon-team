import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const App = () => {
	const onPressLogin = () => {
		// Do something about login operation
	};
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	return (
		<View style={styles.container}>
			<Text style={styles.title}> Login Screen</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Email"
					placeholderTextColor="#003f5c"
					onChangeText={(text) => setState({ email: text })}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					secureTextEntry
					placeholder="Password"
					placeholderTextColor="#003f5c"
					onChangeText={(text) => setState({ password: text })}
				/>
			</View>
			<TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Link href="/register">
					<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
				</Link>
			</TouchableOpacity>
		</View>
	);
};
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
		color: "white",
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
export default App;
