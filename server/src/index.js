const express = require("express");
const app = express();
const cors = require("cors");
const connectBD = require("./config/db");
const userRoutes = require("./routes/users.routes");

require("dotenv").config();
const port = process.env.PORT;

const corsOptions = {
  origin: "*", // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ["GET", "POST", "PATCH", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectBD();
});
