import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

export default function Page() {
	const [state, setState] = useState({
		email: "",
		password: "",
	});

	const onPressRegister = () => {
		// Do something about signup operation
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Name"
					placeholderTextColor="#003f5c"
					onChangeText={(text) => setState({ name: text })}
				/>
			</View>
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
			<TouchableOpacity onPress={onPressRegister} style={styles.registerBtn}>
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
