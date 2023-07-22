import express from "express";
import cors from "cors";
const app = express();

// middle wares
app.use(cors());
app.use(express.json());

// routes

// use route

// home routes
app.get("/", (req, res) => {
	res.status(200).json({
		message: "Server in running",
		statusCodeMessage: "OK",
	});
});

app.all("*", (req, res) => {
	res.status(404).json({
		message: "No route found",
		statusCodeMessage: "Not Found",
	});
});

export default app;
