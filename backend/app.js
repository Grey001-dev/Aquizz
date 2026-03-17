import express from "express";
import cors from "cors";
import useRouter from "./routes/user.route.js";
//import messageRouter from "./routes/message.route.js";
import helmet from "helmet";
//import mongoSanitize from "express-mongo-sanitize";
//import xss from "xss-clean";
import hpp from "hpp";
import { apiLimiter } from "./middleware/rateLimiter.js";
//import passport from "./middleware/googleAuth.middleware.js";

const app = express();

app.set("trust proxy", 1); //for render and hosting services in general

app.use(helmet());
app.use(cors());
//app.use(mongoSanitize());
//app.use(xss());
app.use(hpp());

app.use(express.json());

//app.use(passport.initialize());

app.use(apiLimiter);
app.use("/api/aquizz/user", useRouter);
//app.use("/api/movana/text", messageRouter);

export default app;