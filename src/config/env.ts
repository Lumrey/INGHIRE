import dotenv from "dotenv";
import { cleanEnv, str, port, url } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),
  DEPLOYMENT_ENV: str({
    choices: ["local", "development", "production", "staging"],
  }),
  PORT: port({ default: 3000 }),
  LOG_LEVEL: str({
    desc: "Log level for logger.",
    choices: ["", "fatal", "error", "warn", "info", "debug", "trace"],
    default: "",
  }),
  // ELASTIC_APM_SERVER_URL: url(),
  MONGO_URI: url(),
});

export default env;
