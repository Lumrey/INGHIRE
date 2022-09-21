import configureExpress from "./app";
import { mongoDbConnection } from "./config/dbConnection";
import env from "./config/env";
import logger from "./config/logger";

// importing the routes
import interview from "./routes/interviewRoute";

const start = async () => {
  await mongoDbConnection;

  const app = configureExpress();

  app.listen(env.PORT, () => {
    logger.info(`
      ============================    
          Server Started!
      Http: http://localhost:${env.PORT}    
        Environment: ${env.NODE_ENV}
      ============================
`);
  });
  app.use("/ing-hire/interview", interview);
  
  process.on("unhandledRejection", (err: Error) => {
    logger.error(err.message ?? JSON.stringify(err));
    console.error(err);
    process.exit(1);
  });

  process.on("warning", (err) => {
    logger.warn(err.message ?? JSON.stringify(err));
  });
};
start();
