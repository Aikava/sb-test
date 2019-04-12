import server from 'src/server';
import { get } from 'config';
import IConfig from 'src/types/iconfig';

const { port, hostname }: IConfig['server'] = get('server');

server.listen(port, hostname,  () => {
  console.log(`Server start listen http://${hostname}:${port}`);
});
