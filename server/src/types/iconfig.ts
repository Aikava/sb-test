export default interface IConfig {
  server: {
    port: number;
    hostname: string;
  }
  staticDir: string;
  db: {
    connection: string;
  }
}
