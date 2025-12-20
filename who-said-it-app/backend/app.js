import express from "express";
import cors from "cors";
import quotesRouter from "./router.js";

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Mount your routern, use /quotes as the base path
app.use("/quotes", quotesRouter);

// Connect the port here
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
