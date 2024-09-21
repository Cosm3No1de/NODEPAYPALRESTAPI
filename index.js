import express from "express"
import paymentsRoutes from "./routes/payment.routes.js"
import { PORT } from "./config.js";

const app = express()

app.use(paymentsRoutes)

app.listen(PORT)
console.log("Server on port", PORT)
