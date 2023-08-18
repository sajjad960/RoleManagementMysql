import "dotenv/config";
import app from "./app";


process.on('uncaughtException', (err) => {
  console.log('Uncaught exception shutting down');
  console.log(err.name, err.message);
  process.exit(1);
});

declare var process: {
  exit(arg0: number): unknown;
  on(arg0: string, arg1: (err: any) => void): unknown;
  env: {
    NODE_ENV: string;
    DB_NAME: string;
    PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_HOST: string;
  };
};

// Run our server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app running on the port ${port}`);
});
