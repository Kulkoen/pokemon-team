import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import axios from "axios";

export default function MainArea({}) {
	const [pokemonName, setPokemonName] = useState("");
	const [pokemonChosen, setPokemonChosen] = useState(false);
	const [pokemon, setPokemon] = useState({
		name: "",
		img: "",
		type: "",
	});

	const searchPokemon = () => {
		if (!pokemonName) {
			console.log("Please enter a Pokemon name");
			return;
		}

		const lowerCaseName = pokemonName.toLowerCase();

		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`)
			.then((res) => {
				console.log(res);
				setPokemon({
					name: pokemonName,
					img: res.data.sprites.front_default,
					// type: res.data.types[],
				});
				setPokemonChosen(true);
			})
			.catch((err) => {
				console.log("Could not find a Pokemon with that name");
			});
	};

	// const addPokemon = () => {};

	return (
		<View style={styles.container}>
			<View style={styles.titleSection}>
				<Text style={styles.title}>Find Pokemon</Text>
				<TextInput
					style={styles.searchBar}
					placeholder="Search..."
					onChange={(e) => setPokemonName(e.nativeEvent.text)}
				/>
				<TouchableOpacity style={styles.searchButton} onPress={searchPokemon}>
					<Text>Search</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.displaySection}>
				{!pokemonChosen ? (
					<Text>Please Choose a Pokemon</Text>
				) : (
					<>
						<Text>{pokemon.name}</Text>
						<Image
							source={{ uri: pokemon.img }}
							style={{
								width: 300,
								height: 300,
							}}
						/>
						{/* <Text>Type: {pokemon.type}</Text> */}
					</>
				)}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#FFF8EF",
		alignItems: "center",
	},
	titleSection: {
		flexDirection: "column",
		backgroundColor: "#BDE0FE",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#000000",
		textAlign: "center",
		padding: 10,
	},
	searchBar: {
		backgroundColor: "#ffffff",
		width: "80%",
		borderRadius: 25,
	},
	displaySection: {
		flex: 1,
		display: "flex",
		backgroundColor: "#FFF8EF",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	searchButton: {
		backgroundColor: "#FF0000",
		borderRadius: 25,
		color: "#ffffff",
		padding: 5,
		margin: 10,
	},
});
