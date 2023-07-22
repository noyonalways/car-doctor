import dotenv from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
import express from "express"
import app from "./app.js";


dotenv.config();
const port = process.env.PORT || 8080;

// database connection
mongoose
	.connect(process.env.DATABASE_LOCAL, {
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
		// serverSelectionTimeoutMS: 5000,
		// autoIndex: false, // Don't build indexes
		// maxPoolSize: 10, // Maintain up to 10 socket connections
		// serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
		// socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
		family: 4, // Use IPv4, skip trying IPv6
	})
	.then(() => {
		console.log(`Database Connected Successfully! ✔`.blue.bold);
	});

// Lestenig port
app.listen(port, () => {
	console.log(
		`App is runnng on port ${port}`.yellow.bold,
		`http://localhost:${port}`
	);
});
