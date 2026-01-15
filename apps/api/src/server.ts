import express from "express";
import cors from "cors";
import contentRoutes from "./routes/content";
import paymentRoutes from "./routes/payments";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/content", contentRoutes);
app.use("/payments", paymentRoutes);

export default app;
