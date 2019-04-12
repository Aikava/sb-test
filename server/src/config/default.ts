import IConfig from 'src/types/iconfig';

const config: Partial<IConfig>= {
  server: {
    port: 1122,
    hostname: 'localhost'
  },
  staticDir: process.env.STATIC_DIR
};

export = config;
