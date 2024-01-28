const mongoose = require("mongoose");

// Define a schema for user details
const UserDetailSchema = new mongoose.Schema(
	{
		// Fields for user
		name: String,
		email: { type: String, unique: true },
		password: String,
	},
	{
		// Collection for user information
		collection: "UserInfo",
	}
);

// Create a model for user details using the schema
mongoose.model("UserInfo", UserDetailSchema);
