import { resolve } from 'path';
import { Arguments } from 'yargs';
import logger from '../logger';
import { handler as addHandler } from './add';

export const command = 'new';
export const describe = 'simplified creation focused on react-redux-fabric app';
export const builder = {
  kind: {
    alias: 'k',
    required: true,
    type: 'string',
    describe: 'type to create: [\'app\' | \'action\' | \'component\']'
  },
  appName: {
    alias: 'a',
    required: false,
    type: 'string',
    describe: 'name of the app or action to be created'
  }
};

export type CodeKind = 'app' | 'action' | 'component';

export interface ARGV {
  kind: CodeKind;
  appName: string;
}

export async function handler(argv: ARGV & Arguments): Promise<string> {
  const { kind, appName } = argv;
  const addSource = {
    app: {
      source: 'examples/{{app}}'
    },
    action: {
      source: 'examples/actions'
    },
    component: {
      source: 'examples/{{compoennt}}'
    }
  };

  const source = resolve(argv.$0, `../../${addSource[kind].source}`);
  const target = resolve('.', appName);
  const addArgv = { source, target, $0: argv.$0, _: [] };

  logger.info(`calling add with argv = ${JSON.stringify(addArgv, null, 2)}`);

  return addHandler(addArgv);
}
