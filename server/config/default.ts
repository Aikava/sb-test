import os from 'os';
import IConfig from 'types/iconfig';

const config: IConfig = {
  server: {
    port: 1122,
    hostname: os.hostname()
  }
};

export default config;
