import IConfig from 'types/iconfig';
import path from 'path';

const config: Partial<IConfig> = {
  server: {
    port: 1122,
    hostname: 'localhost'
  },
  staticDir: path.resolve(__dirname, '..', '..', 'client', 'dist')
};

export default config;
