const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 5000;
const mongoURL =
	"mongodb+srv://keefeoen:admin@cluster0.mkd96tq.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

// Connect to the MongoDB database using mongoose
mongoose
	.connect(mongoURL)
	.then(() => {
		// If the connection is successful
		console.log("Database Connected");
	})
	.catch((e) => {
		// If the connection fails, log the error
		console.log(e);
	});

// Import the user details schema and model
require("./UserDetails");
const User = mongoose.model("UserInfo");

// Define a GET route for the '/' endpoint
app.get("/", (req, res) => {
	res.send("Hello from the backend");
});

// Define a POST route for the '/register' endpoint
app.post("/register", async (req, res) => {
	// Get the name, email, and password from the request body
	const { name, email, password } = req.body;

	// Check if there is already a user with the same email
	const oldUser = await User.findOne({ email: email });

	// If yes, send a response with a message
	if (oldUser) {
		return res.send({ data: "User already exist" });
	}

	try {
		// If no, create a new user with the given details
		await User.create({
			name: name,
			email: email,
			password: password,
		});
		res.send({ status: "OK", data: "User Created" });
	} catch (error) {
		res.send({ status: "ERROR", error: error });
	}
});

// Start the server and listen on the port
app.listen(port, () => {
	console.log(`Server has started ${port}`);
});
